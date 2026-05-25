<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$allowedOrigins = [
    'https://www.ja-yhymm.pl',
    'https://ja-yhymm.pl',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['success' => false, 'error' => 'Method not allowed']);
}

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    json_response(500, ['success' => false, 'error' => 'Brak pliku config.php. Skopiuj config.example.php jako config.php.']);
}

/** @var array<string, mixed> $config */
$config = require $configPath;

$raw = file_get_contents('php://input') ?: '';
$body = json_decode($raw, true);
if (!is_array($body)) {
    json_response(400, ['success' => false, 'error' => 'Nieprawidłowe dane JSON.']);
}

$subject = trim((string) ($body['subject'] ?? ''));
$text = trim((string) ($body['text'] ?? ''));
$replyTo = trim((string) ($body['replyTo'] ?? ''));
$recaptchaToken = trim((string) ($body['recaptchaToken'] ?? ''));

if ($subject === '' || $text === '') {
    json_response(400, ['success' => false, 'error' => 'Brak tematu lub treści wiadomości.']);
}

$disableRecaptcha = !empty($config['disable_recaptcha']);
if (!$disableRecaptcha) {
    $secret = trim((string) ($config['recaptcha_secret'] ?? ''));
    if ($secret === '') {
        json_response(500, ['success' => false, 'error' => 'Brak recaptcha_secret w config.php.']);
    }
    if ($recaptchaToken === '') {
        json_response(400, ['success' => false, 'error' => 'Brak weryfikacji reCAPTCHA.']);
    }
    $captcha = verify_recaptcha($secret, $recaptchaToken, (float) ($config['recaptcha_min_score'] ?? 0.5));
    if (!$captcha['success']) {
        json_response(400, ['success' => false, 'error' => $captcha['error'] ?? 'Weryfikacja reCAPTCHA nie powiodła się.']);
    }
}

$to = trim((string) ($config['form_recipient'] ?? 'biuro@ja-yhymm.pl'));
if ($to === '') {
    $to = 'biuro@ja-yhymm.pl';
}

try {
  send_form_mail($config, $to, $subject, $text, $replyTo !== '' ? $replyTo : null);
  json_response(200, ['success' => true, 'to' => $to]);
} catch (Throwable $e) {
  json_response(500, ['success' => false, 'error' => 'Nie udało się wysłać wiadomości.']);
}

function json_response(int $code, array $payload): void
{
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/** @return array{success: bool, error?: string} */
function verify_recaptcha(string $secret, string $token, float $minScore): array
{
    $post = http_build_query([
        'secret' => $secret,
        'response' => $token,
    ]);

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $post,
            'timeout' => 15,
        ],
    ]);

    $result = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
    if ($result === false) {
        return ['success' => false, 'error' => 'Weryfikacja reCAPTCHA nie powiodła się.'];
    }

    $data = json_decode($result, true);
    if (!is_array($data) || empty($data['success'])) {
        $codes = isset($data['error-codes']) && is_array($data['error-codes'])
            ? implode(', ', $data['error-codes'])
            : '';
        return [
            'success' => false,
            'error' => $codes !== '' ? 'reCAPTCHA: ' . $codes : 'Weryfikacja reCAPTCHA nie powiodła się.',
        ];
    }

    if (isset($data['score']) && is_numeric($data['score']) && (float) $data['score'] < $minScore) {
        return ['success' => false, 'error' => 'Weryfikacja reCAPTCHA nie powiodła się. Spróbuj ponownie.'];
    }

    return ['success' => true];
}

function build_plain_text_body(string $text): string
{
    $normalized = str_replace(["\r\n", "\r"], "\n", $text);

    return preg_replace("/\n/", "\r\n", $normalized) ?? $normalized;
}

function build_multipart_email_body(string $text, string $html): array
{
    $boundary = 'ja-yhymm-' . bin2hex(random_bytes(8));
    $plain = build_plain_text_body($text);
    $parts = [
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        '',
        '--' . $boundary,
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        '',
        $plain,
        '',
        '--' . $boundary,
        'Content-Type: text/html; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        '',
        $html,
        '',
        '--' . $boundary . '--',
        '',
    ];

    return ['boundary' => $boundary, 'body' => implode("\r\n", $parts)];
}

/** @param array<string, mixed> $config */
function send_form_mail(array $config, string $to, string $subject, string $text, ?string $replyTo): void
{
    require_once __DIR__ . '/form-email-html.php';

    $from = trim((string) ($config['mail_from'] ?? 'mailer@ja-yhymm.pl'));
    $fromName = trim((string) ($config['mail_from_name'] ?? 'JA YHYMM — formularz'));
    $smtpHost = trim((string) ($config['smtp_host'] ?? ''));
    $html = format_form_text_as_html($text);

    if ($smtpHost !== '') {
        smtp_send_mail($config, $from, $fromName, $to, $subject, $text, $html, $replyTo);
        return;
    }

    $multipart = build_multipart_email_body($text, $html);
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $multipart['boundary'] . '"',
        'From: ' . encode_mime_header($fromName) . " <{$from}>",
    ];

    if ($replyTo !== null && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }

    $ok = @mail($to, $encodedSubject, $multipart['body'], implode("\r\n", $headers));
    if (!$ok) {
        throw new RuntimeException('mail() failed');
    }
}

function encode_mime_header(string $value): string
{
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($value, 'UTF-8');
    }
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

/** @param array<string, mixed> $config */
function smtp_send_mail(
    array $config,
    string $from,
    string $fromName,
    string $to,
    string $subject,
    string $text,
    string $html,
    ?string $replyTo,
): void {
    $host = (string) $config['smtp_host'];
    $port = (int) ($config['smtp_port'] ?? 465);
    $user = (string) ($config['smtp_user'] ?? '');
    $pass = (string) ($config['smtp_pass'] ?? '');

    if ($user === '' || $pass === '') {
        throw new RuntimeException('Brak SMTP_USER lub SMTP_PASS w config.php.');
    }

    $remote = ($port === 465 ? 'ssl://' : '') . $host;
    $socket = @stream_socket_client("{$remote}:{$port}", $errno, $errstr, 30);
    if (!$socket) {
        throw new RuntimeException("SMTP connect failed: {$errstr}");
    }

    stream_set_timeout($socket, 30);
    smtp_expect($socket, [220]);
    smtp_command($socket, 'EHLO ja-yhymm.pl');
    smtp_expect($socket, [250]);
    smtp_command($socket, 'AUTH LOGIN');
    smtp_expect($socket, [334]);
    smtp_command($socket, base64_encode($user));
    smtp_expect($socket, [334]);
    smtp_command($socket, base64_encode($pass));
    smtp_expect($socket, [235]);
    smtp_command($socket, "MAIL FROM:<{$from}>");
    smtp_expect($socket, [250]);
    smtp_command($socket, "RCPT TO:<{$to}>");
    smtp_expect($socket, [250, 251]);
    smtp_command($socket, 'DATA');
    smtp_expect($socket, [354]);

    $message = build_smtp_message($from, $fromName, $to, $subject, $text, $html, $replyTo);
    fwrite($socket, $message . "\r\n.\r\n");
    smtp_expect($socket, [250]);
    smtp_command($socket, 'QUIT');
    fclose($socket);
}

/** @param resource $socket */
function smtp_command($socket, string $command): void
{
    fwrite($socket, $command . "\r\n");
}

/** @param resource $socket */
function smtp_expect($socket, array $okCodes): void
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $okCodes, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }
}

function build_smtp_message(
    string $from,
    string $fromName,
    string $to,
    string $subject,
    string $text,
    string $html,
    ?string $replyTo,
): string {
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $multipart = build_multipart_email_body($text, $html);
    $lines = [
        'From: ' . encode_mime_header($fromName) . " <{$from}>",
        "To: <{$to}>",
        'Subject: ' . $encodedSubject,
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $multipart['boundary'] . '"',
    ];

    if ($replyTo !== null && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
        $lines[] = 'Reply-To: ' . $replyTo;
    }

    $lines[] = '';
    $lines[] = $multipart['body'];

    return implode("\r\n", $lines);
}

<?php

declare(strict_types=1);

function form_email_escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function form_email_format_field_line(string $line): ?string
{
    if (!preg_match('/^([^:\n]+):\s*(.*)$/u', trim($line), $matches)) {
        return null;
    }

    $label = form_email_escape(trim($matches[1]));
    $fieldValue = form_email_escape(trim($matches[2]));
    $row = 'margin:0 0 14px;font-size:16px;line-height:1.55;';
    $labelStyle = 'font-size:15px;font-weight:400;color:#4a4a4a;';
    $valueStyle = 'font-size:18px;font-weight:700;color:#1a1a1a;';

    return '<p style="' . $row . '"><span style="' . $labelStyle . '">' . $label . ':</span> '
        . '<span style="' . $valueStyle . '">' . $fieldValue . '</span></p>';
}

function form_email_format_section_heading(string $line): ?string
{
    if (!preg_match('/^---\s*(.+?)\s*---$/u', trim($line), $matches)) {
        return null;
    }

    $title = form_email_escape(trim($matches[1]));

    return '<h3 style="margin:24px 0 12px;font-size:17px;font-weight:700;color:#1a1a1a;'
        . 'border-bottom:2px solid #F7C73B;padding-bottom:6px;">' . $title . '</h3>';
}

function format_form_text_as_html(string $text): string
{
    $wrapper = 'font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#1a1a1a;';
    $parts = ['<div style="' . $wrapper . '">'];
    $blocks = preg_split("/\n\n+/", str_replace(["\r\n", "\r"], "\n", $text)) ?: [];

    foreach ($blocks as $block) {
        $lines = array_filter(array_map('trim', explode("\n", $block)), static fn (string $line): bool => $line !== '');
        if ($lines === []) {
            continue;
        }

        foreach ($lines as $line) {
            $section = form_email_format_section_heading($line);
            if ($section !== null) {
                $parts[] = $section;
                continue;
            }

            $fieldRow = form_email_format_field_line($line);
            if ($fieldRow !== null) {
                $parts[] = $fieldRow;
                continue;
            }

            $parts[] = '<p style="margin:0 0 16px;font-size:18px;font-weight:700;line-height:1.5;">'
                . form_email_escape($line) . '</p>';
        }
    }

    $parts[] = '</div>';

    return implode("\n", $parts);
}

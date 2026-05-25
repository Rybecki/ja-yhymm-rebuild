const FIELD_LINE = /^([^:\n]+):\s*(.*)$/;

const WRAPPER_STYLE =
  'font-family: Arial, Helvetica, sans-serif; font-size: 17px; line-height: 1.65; color: #1a1a1a;';

const ROW_STYLE = 'margin: 0 0 14px; font-size: 16px; line-height: 1.55;';

const LABEL_STYLE = 'font-size: 15px; font-weight: 400; color: #4a4a4a;';

const VALUE_STYLE = 'font-size: 18px; font-weight: 700; color: #1a1a1a;';

const SECTION_STYLE =
  'margin: 24px 0 12px; font-size: 17px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #F7C73B; padding-bottom: 6px;';

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatFieldLine(line) {
  const match = line.trim().match(FIELD_LINE);
  if (!match) return null;
  const label = escapeHtml(match[1].trim());
  const value = escapeHtml(match[2].trim());
  return `<p style="${ROW_STYLE}"><span style="${LABEL_STYLE}">${label}:</span> <span style="${VALUE_STYLE}">${value}</span></p>`;
}

export function formatFormTextAsHtml(text) {
  const blocks = text.split(/\n\n+/);
  const parts = [`<div style="${WRAPPER_STYLE}">`];

  for (const block of blocks) {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    for (const line of lines) {
      const sectionMatch = line.match(/^---\s*(.+?)\s*---$/);
      if (sectionMatch) {
        parts.push(`<h3 style="${SECTION_STYLE}">${escapeHtml(sectionMatch[1].trim())}</h3>`);
        continue;
      }

      const fieldRow = formatFieldLine(line);
      if (fieldRow) {
        parts.push(fieldRow);
        continue;
      }
      parts.push(
        `<p style="margin: 0 0 16px; font-size: 18px; font-weight: bold; line-height: 1.5;">${escapeHtml(line)}</p>`,
      );
    }
  }

  parts.push('</div>');
  return parts.join('\n');
}

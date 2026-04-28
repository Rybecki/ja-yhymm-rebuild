
export function parseOptionalFacultyLine(line: string): {
  title: string;
  middle: string;
  price: string;
} {
  const trimmed = line.trimEnd();
  const priceMatch = trimmed.match(/\s[–—]\s*([\d]+\s*zł)\s*$/i);
  if (!priceMatch || priceMatch.index === undefined) {
    return { title: trimmed, middle: '', price: '' };
  }
  const price = priceMatch[1]!.replace(/\s+/g, ' ').trim();
  const before = trimmed.slice(0, priceMatch.index).trimEnd();
  const sep = before.search(/\s[–—]\s/);
  if (sep === -1) {
    return { title: before, middle: '', price };
  }
  const title = before.slice(0, sep).trim();
  const middle = before.slice(sep).replace(/^\s[–—]\s+/, '').trim();
  return { title, middle, price };
}

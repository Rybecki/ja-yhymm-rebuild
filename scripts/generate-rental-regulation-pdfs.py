"""Generate static PDF files for rental regulations. Run once after editing rentalRegulations.ts."""

from __future__ import annotations

import re
import sys
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "documents" / "regulaminy"
DATA_FILE = ROOT / "src" / "data" / "rentalRegulations.ts"

FONT_CANDIDATES = [
    Path(r"C:\Windows\Fonts\arial.ttf"),
    Path(r"C:\Windows\Fonts\calibri.ttf"),
    Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
]


def parse_regulations(ts_source: str) -> list[tuple[str, str, str]]:
    """Extract (id, title, fullText) from rentalRegulations.ts without a TS parser."""
    blocks = re.findall(
        r"\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*file:\s*'[^']+',\s*fullText:\s*`([\s\S]*?)`,\s*\}",
        ts_source,
    )
    return blocks


def find_font() -> Path:
    for candidate in FONT_CANDIDATES:
        if candidate.is_file():
            return candidate
    raise FileNotFoundError("No Unicode TTF font found for PDF generation.")


def write_pdf(title: str, body: str, output: Path, font_path: Path) -> None:
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.add_font("Body", "", str(font_path))
    pdf.set_font("Body", size=14)
    pdf.multi_cell(0, 8, title)
    pdf.ln(4)
    pdf.set_font("Body", size=10)
    pdf.multi_cell(0, 5, body)
    output.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(output))


def main() -> int:
    source = DATA_FILE.read_text(encoding="utf-8")
    font_path = find_font()
    regulations = parse_regulations(source)

    for reg_id, title, full_text in regulations:
        filename = {
            "e-rowery": "regulamin-wypozyczalni-rowerow-elektrycznych.pdf",
            "kajaki": "regulamin-wypozyczalni-kajakow.pdf",
            "autolaweta": "regulamin-uslugi-autolaweta.pdf",
            "vip-bus": "regulamin-uslugi-vip-bus.pdf",
            "dmuchance": "regulamin-urzadzen-dmuchanych.pdf",
        }.get(reg_id)
        if not filename:
            print(f"Skip unknown id: {reg_id}", file=sys.stderr)
            continue
        out = OUT_DIR / filename
        write_pdf(title, full_text, out, font_path)
        print(f"Wrote {out.relative_to(ROOT)}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

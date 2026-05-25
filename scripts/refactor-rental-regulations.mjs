import fs from 'fs';

const files = [
  ['src/pages/RentalEBikesPage.tsx', 'e-rowery', /import \{ calculateEBikePricing/],
  ['src/pages/RentalKayaksPage.tsx', 'kajaki', /import \{ RENTAL_CONTENT_WIDE/],
  ['src/pages/RentalAutolawetaPage.tsx', 'autolaweta', /import \{ RENTAL_CONTENT_WIDE/],
  ['src/pages/RentalVipBusPage.tsx', 'vip-bus', /import \{ RENTAL_CONTENT_WIDE/],
  ['src/pages/RentalInflatablesPage.tsx', 'dmuchance', /import \{ RENTAL_CONTENT_WIDE/],
];

for (const [file, id, importAnchor] of files) {
  let source = fs.readFileSync(file, 'utf8');
  if (!source.includes('getRentalRegulationText')) {
    source = source.replace(
      importAnchor,
      "import { getRentalRegulationText } from '../data/rentalRegulations';\n$&",
    );
  }
  source = source.replace(
    /const REGULATIONS_TEXT = `[\s\S]*?`;\r?\n\r?\n/,
    `const REGULATIONS_TEXT = getRentalRegulationText('${id}');\n\n`,
  );
  fs.writeFileSync(file, source);
  console.log(`Updated ${file}`);
}

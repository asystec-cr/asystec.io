import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.resolve('public/images/agente-nexo');
const outPath = path.join(outDir, 'og-agente-nexo.jpg');

await fs.promises.mkdir(outDir, { recursive: true });

const width = 1200;
const height = 630;

// Keep the social preview aligned with the enterprise-agent landing.
const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0b1220"/>
  <g font-family="Inter, Segoe UI, sans-serif">
    <text x="72" y="90" font-size="28" font-weight="700" fill="#82aaff">Asystec</text>
    <text x="72" y="226" font-size="82" font-weight="700" fill="#ffffff">Agente Nexo</text>
    <text x="72" y="325" font-size="46" font-weight="600" fill="#ffffff">Un agente de IA para su empresa.</text>
    <text x="72" y="389" font-size="46" font-weight="600" fill="#82aaff">Trabajando para usted, 24/7.</text>
    <text x="72" y="532" font-size="30" font-weight="400" fill="#ffffff">Reportes · Ventas · Marketing · Operaciones</text>
  </g>
</svg>
`;

const buffer = Buffer.from(svg);
await sharp(buffer).jpeg({ quality: 85, mozjpeg: true }).toFile(outPath);

console.log(`OG image written: ${outPath}`);

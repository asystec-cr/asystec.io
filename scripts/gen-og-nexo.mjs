import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.resolve('public/images/agente-nexo');
const outPath = path.join(outDir, 'og-agente-nexo.jpg');

await fs.promises.mkdir(outDir, { recursive: true });

const width = 1200;
const height = 630;

// Simple SVG with brand-like gradient and text
const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0ea5e9"/>
      <stop offset="60%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <circle cx="${width - 140}" cy="120" r="120" fill="rgba(147,197,253,0.35)"/>
  <circle cx="120" cy="${height - 100}" r="110" fill="rgba(6,182,212,0.30)"/>
  <g font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif">
    <text x="72" y="240" font-size="72" font-weight="800" fill="#ffffff">Agente Nexo</text>
    <text x="72" y="305" font-size="34" font-weight="600" fill="#e2e8f0">Agente de IA para WhatsApp</text>
    <rect x="72" y="350" rx="10" ry="10" width="540" height="70" fill="rgba(255,255,255,0.15)" />
    <text x="95" y="396" font-size="28" font-weight="700" fill="#ffffff">Solicite una demo · +506 8975 4741</text>
    <text x="72" y="${height - 48}" font-size="22" font-weight="600" fill="#bfdbfe">Asystec</text>
  </g>
</svg>
`;

const buffer = Buffer.from(svg);
await sharp(buffer)
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(outPath);

console.log(`OG image written: ${outPath}`);


import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to urls.json
const filePath = path.join(__dirname, '../urls.json');

export function findUrl(newUrl) {
  let urls = [];

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    urls = JSON.parse(data);
  } catch {
    urls = [];
  }

  urls.push(newUrl);

  fs.writeFileSync(filePath, JSON.stringify(urls, null, 2), 'utf-8');

  return newUrl;
}
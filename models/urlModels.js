import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const filePath = path.join(__dirname, '../urls.json'); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const saveUrl = (newUrlData) => {
    try {
        // 1. Read the existing file
        const rawData = fs.readFileSync(dbPath, 'utf-8');
        const urls = JSON.parse(rawData);

        // 2. Append the new data to the array
        urls.push(newUrlData);

        // 3. Write it back to the file
        fs.writeFileSync("Path", JSON.stringify(urls, null, 2));
        
        return newUrlData; // Return it so the controller can send it to the UI
    } catch (error) {
        console.error("Error saving URL:", error);
    }
};

module.exports = { findUrl };
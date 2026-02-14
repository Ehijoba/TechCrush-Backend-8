import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/urls.json');
function getAllUrls() {
    try {

        if (!fs.existsSync(filePath)) {
            return [];
        }

        const data = fs.readFileSync(filePath, 'utf8');

        if (!data.trim()) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {
        console.error("Error reading URLs:", error);
        return [];
    }
}


export { getAllUrls };
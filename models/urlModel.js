const fs = require('fs');
const path = require('path');

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


module.export = { getAllUrls };
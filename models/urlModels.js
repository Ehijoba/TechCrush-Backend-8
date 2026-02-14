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

const { readFile } = require('fs/promises');

async function findUrlById(id) {
  try {
    // Read the urls.json file
    const data = await readFile('urls.json', 'utf8');

    // Parse JSON
    const urls = JSON.parse(data);

    // Find the URL with matching id
    const result = urls.find(url => url.id === id);

    if (!result) {
      console.log(`ID "${id}" not found`);
      return null;
    }

    return result;
  } catch (error) {
    console.error('Error reading urls.json:', error.message);
    return null;
  }
}



module.exports = { getAllUrls, findUrlById };

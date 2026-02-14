const fs = require('fs');
const path = require('path');

module.exports = { getAllUrls, findUrlById, saveUrl };

// 1. Define the path to the database ONCE
const filePath = path.join(__dirname, '../urls.json');

// 2. The Read Function (Already merged)
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

const findUrlById = (id) => {
    try {
        const urls = getAllUrls(); // Reuse the helper above!
        
        // Find the specific URL
        const result = urls.find(url => url.shortId === id || url.id === id);
        
        if (!result) {
            console.log(`ID "${id}" not found`);
            return null;
        }
        return result;
    } catch (error) {
        console.error("Error finding URL:", error);
        return null;
    }
};

const saveUrl = (originalUrl, shortId) => {
    try {
        const urls = getAllUrls(); // Reuse the read function!
        
        const newUrl = {
            id: shortId,      // The short code (e.g., 'abc12')
            originalUrl: originalUrl,
            createdAt: new Date().toISOString(),
            clicks: 0
        };

        urls.push(newUrl);
        
        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(urls, null, 2));
        return newUrl;
    } catch (error) {
        console.error("Error saving URL:", error);
        throw error;
    }
};

module.exports = { getAllUrls, findUrlById, saveUrl };
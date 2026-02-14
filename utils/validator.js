const fs = require('fs');
const path = require('path');

const urlsPath = path.join(__dirname, '../urls.json');

// Validate a long URL
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
}

// Validate a short code (alphanumeric, 4-10 characters)
function isValidShortCode(code) {
    return /^[a-zA-Z0-9]{4,10}$/.test(code);
}

// Read URLs from JSON
function readURLs() {
    const data = fs.readFileSync(urlsPath, 'utf8');
    return JSON.parse(data);
}

// Save URLs to JSON
function saveURLs(urls) {
    fs.writeFileSync(urlsPath, JSON.stringify(urls, null));
}

//make the functions available for import
module.exports = {
    isValidURL,
    isValidShortCode,
    readURLs,
    saveURLs
};


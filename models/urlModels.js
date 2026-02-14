const fs = require('fs');
const path = require('path');

// Path to urls.json
const filePath = path.join(__dirname, '../urls.json');

function findUrl(originalUrl) {
  let urls = [];

  // Generate a short ID for the URL
  const shortId = Math.random().toString(36).substring(2, 8);

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    urls = JSON.parse(data);
  } catch {
    urls = [];
  }

  const newEntry = { originalUrl, shortId };
  urls.push(newEntry);

  fs.writeFileSync(filePath, JSON.stringify(urls, null, 2), 'utf-8');

  return newEntry;
}

module.exports = { findUrl };

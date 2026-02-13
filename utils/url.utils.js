const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "../data/urls.json");

function generateCode(length = 6) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code = "";

  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  return code;
}

async function readUrls() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function writeUrls(data) {
  await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
}

async function saveUrl(longUrl) {
  const urls = await readUrls();

  let code;

  do {
    code = generateCode();
  } while (urls[code]);

  urls[code] = longUrl;

  await writeUrls(urls);

  return code;
}

async function getLongUrl(code) {
  const urls = await readUrls();
  return urls[code] || null;
}

module.exports = {
  generateCode,
  readUrls,
  writeUrls,
  saveUrl,
  getLongUrl,
};

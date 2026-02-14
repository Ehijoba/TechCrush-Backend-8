// utils/validator.js

function isValidUrl(url) {
  // Simple regex to check for http or https
  return /^(http|https):\/\/[^ "]+$/.test(url);
}

module.exports = { isValidUrl };

const { isValidURL, isValidShortCode, readURLs, saveURLs } = require('./utils/validator');//import functions from validator.js

// test long URL
console.log(isValidURL('https://group8.com')); 
console.log(isValidURL('group8')); 

// test short code
console.log(isValidShortCode('grp8')); 
console.log(isValidShortCode('g.8'));

// test saving and reading URLs
const urls = readURLs();
urls['grp8'] = 'https://group8.com';
saveURLs(urls);
console.log(readURLs());

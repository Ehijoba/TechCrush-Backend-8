// main.js
import { findUrlById } from './urlmodels.js';

const idToSearch = 'abc123';

const url = await findUrlById(idToSearch);

console.log(url);
// Example output: { id: 'abc123', originalUrl: 'https://google.com' }

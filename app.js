const express = require('express');
const { findUrl } = require('./models/urlModels');

const { shortenUrl } = require('./controllers/urlController');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Form submission endpoint

app.post('/shorten', shortenUrl)

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
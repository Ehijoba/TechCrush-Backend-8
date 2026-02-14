const express = require('express');
const { findUrl } = require('./models/urlModels');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Form submission endpoint
app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;

  // Generate a short code
  const code = Math.random().toString(36).substring(2, 8);

  // Step 5: use findUrl() to save new mapping
  const saved = findUrl({ code, longUrl });

  res.send(`Short URL code: ${saved.code}`);
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
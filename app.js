const express = require('express');
const app = express();
const PORT = 3000;

// Middleware we wanna use to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// A simple test route to check if it's working
app.get('/', (req, res) => {
    res.send("Welcome to Group 15 URL Shortener API!");
});

// Start up the server {pardon my console.log}
app.listen(PORT, () => {
    console.log(`Server is running live on http://localhost:${PORT}`);
});
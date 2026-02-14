const { saveUrl } = require('../models/urlModels'); 
const { isValidUrl } = require('../utils/validator');

const shortenUrl = (req, res) => {
    const { originalUrl } = req.body;

    // 1. Validate the Input
    if (!isValidUrl(originalUrl)) {
        return res.status(400).render('index', { 
            error: 'Invalid URL format. Please use http:// or https://',
            shortenedUrl: null 
        });
    }

    try {
        // 2. Save to Database (using the Model)
        const newUrlEntry = saveUrl(originalUrl);

        // 3. Send Response (Render the UI with the new link)
        res.render('index', { 
            shortenedUrl: `${req.headers.host}/${newUrlEntry.shortId}`,
            error: null
        });
    } catch (err) {
        console.error(err);
        res.status(500).render('index', { 
            error: 'Server Error. Could not shorten URL.',
            shortenedUrl: null 
        });
    }
};

module.exports = { shortenUrl };
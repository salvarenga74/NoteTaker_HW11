const htmlRoutes = require('express').Router();
const path  = require('path');

// GET Routes for HTML Notes & index page
htmlRoutes.get('notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','notes.html'));
});

    // catch all is star
htmlRoutes.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

module.exports = htmlRoutes;
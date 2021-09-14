const htmlRoutes = require('express').Router();

// do I need to require the public notes page.html at the top here?

// GET Routes for HTML Notes & index page
htmlRoutes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = htmlRoutes;
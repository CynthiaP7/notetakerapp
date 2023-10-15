const router = require('express').Router();
const path = require('path');

//get notes will return notes html
router.get('/notes', (req, res) => {
    res.sendFile('notes.html', { root: path.join(__dirname, '../public')});
});

//get * will return index.html
router.get('*', (req, res) => {
    res.sendFile('notes.html', { root: path.join(__dirname, '../public')});
});

module.exports = router;
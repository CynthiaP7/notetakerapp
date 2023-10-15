const router = require('express').Router();
const path = require('path');
const dbPath = path.join(__dirname, '../db/db.json');
const fs = require('fs');


router.get('/notes', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err,data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post('/notes', (req, res) => {
    const newNote = req.body;

    fs.readFile(dbPath, 'utf8', (err,data) => {
        if (err) throw err;
        const notes = JSON.parse(data);


    });
});

router.delete('/notes/:id'), (req, res) => {
    
}
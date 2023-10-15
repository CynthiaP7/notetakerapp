const router = require('express').Router();
const path = require('path');
const dbPath = path.join(__dirname, '../db/db.json');
const fs = require('fs');


router.get('/notes', (req, res) => {
    fs.readFile
    if (err) throw err;
    res.json(JSON.parse(data));

});
const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    fs.readFile("db.json", function (err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
        console.log(notes)
    })

})
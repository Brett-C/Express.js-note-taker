const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json"));
    res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson)
});

module.exports = router;


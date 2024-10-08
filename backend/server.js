const express = require('express');
const dotenv = require('dotenv')
const notes = require('./data/notes');

const app = express();
dotenv.config()

app.get('/test', (req, res) => {
    res.send('Api testing fine');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/note/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    console.log(req.params.id);
    res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at PORT ${PORT}`));
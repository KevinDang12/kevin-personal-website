const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let notes = [];

/**
 * GET Request when the user finds the list of boards
 * from the backend
 */
app.get('/api/notes', (req, res) => {
    res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((b) => b.id === req.params.id);
    if (!note) { // 404 object not found
        res.status(404).send('The board with the given ID was not found.');
    }
    res.send(note);
});

app.post('/api/notes', (req, res) => {
    const user = req.body;
    notes.push(user);
    res.send(notes);
});

app.put('/api/notes/:id', (req, res) => {
    const note = notes.find((b) => b.id === req.params.id);
    if (!note) { // 404 object not found
        res.status(404).send('The board with the given ID was not found.');
    }
    note.note = req.body.note;
    res.send(note);
});
  
const port = process.env.PORT || 5000;
app.listen(port, () =>
console.log(`Listening on port ${port}\nThe Server is running`),
);

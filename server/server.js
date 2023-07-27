const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(express.json());
app.use(cors());

const FILE = 'saveFile.json';

/**
 * Add an Encryption Algorithm for the notes
 */

/**
 * Read the save file to get the list
 * of saved minesweeper games
 * @param {*} boards The boards array to store
 * the objects of the minesweeper games
 * @return {*} The list of minesweeper games
 */
const read = () => {
    try {
      const data = fs.readFileSync(FILE, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
    }
  };
  
/**
 * Overwrite the existing save file, or create a
 * new save file if it does not exists with the save data
 * @param {*} boards The array of minesweeper games to save to the save file.
 */
const write = (boards) => {
    fs.writeFile(FILE, JSON.stringify(boards), function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
};

/**
 * GET Request when the user finds the list of boards
 * from the backend
 */
app.get('/api/notes', (req, res) => {
    let notes = [];
    if (!fs.existsSync(FILE)) {
        write([]);
    } else {
        notes = read();
    }
    res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const notes = read();
    const note = notes.find((b) => b.id === req.params.id);

    if (!note) { // 404 object not found
        res.status(404).send('The board with the given ID was not found.');
    }
    
    res.send(note);
});

app.post('/api/notes', (req, res) => {
    let notes = [];
    const user = req.body;

    if (fs.existsSync(FILE)) {
        notes = read();
    }

    notes.push(user);
    write(notes);
    res.send(notes);
});

app.put('/api/notes/:id', (req, res) => {
    const notes = read();
    const note = notes.find((b) => b.id === req.params.id);

    if (!note) { // 404 object not found
        res.status(404).send('The board with the given ID was not found.');
    }

    note.note = req.body.note;
    note.title = req.body.title;

    write(notes);
    res.send(note);
});
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}\nThe Server is running`)
});

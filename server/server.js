const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const { encryptData, decryptData } = require('./cipher');

const _dirname = path.dirname('');
const buildPath = path.join(_dirname, '../build');
const NOTE_FILE = 'notes.json';
const MINESWEEPER_FILE = 'minesweeper.json';

app.use(express.static(buildPath));

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

/**
 * Use express-session to store the user's information
 */
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
}));

/* Auth routes */

/**
 * GET Request to check if the user is authenticated
 */
app.get('/api/user/profile', (req, res) => {
    if (req.isAuthenticated()) {
        // The user is authenticated, send the profile stored in the session
        res.json(req.user);
    } else {
        // If the user is not authenticated, send an empty object or an error message
        res.json(null);
    }
});

/**
 * GET Request when the user clicks the logout button
 */
app.get('/logout', async (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Logout failed:', err);
            return res.status(500).json({ message: 'Logout failed' });
        }
    });
    res.redirect(`/signin`);
});

/**
 * Read the save file to get the list
 * of users and saved notes
 * @return {*} The list of users and their notes
 */
const read = (file) => {
    try {
      const data = fs.readFileSync(file, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
    }
  };
  
/**
 * Overwrite the existing save file, or create a
 * new save file if it does not exists with the save data
 * @param {*} notes The user and their notes to save to the save file.
 */
const write = (notes, file) => {
    fs.writeFile(file, JSON.stringify(notes), function(err) {
        if (err) throw err;
    });
};

/**
 * GET Request when the user finds the list of users
 * from the backend
 */
app.get('/api/notes', (req, res) => {
    let notes = [];
    if (!fs.existsSync(NOTE_FILE)) {
        write([], NOTE_FILE);
    } else {
        notes = read(NOTE_FILE);
    }
    res.send(notes);
});

/**
 * GET Request when the user finds the status of the server
 */
app.get('/api/status', (req, res) => {
    res.status(200).send('The server is running');
});

/**
 * GET Request when the user finds a specific user and their notes
 * from the backend
 */
app.get('/api/notes/:id', (req, res) => {
    const notes = read(NOTE_FILE);
    const user = notes.find((b) => b.id === req.params.id);

    if (user === null || typeof user === 'undefined') { // 404 object not found
        res.status(404).send('The user with the given ID was not found.');
    } else {
        user.title = decryptData(user.title, user.id);
        user.note = decryptData(user.note, user.id);
        res.send(user);
    }
});

/**
 * POST Request when the user creates a new note
 * Save the note to the save file
 */
app.post('/api/notes', (req, res) => {
    let notes = [];
    let user = req.body;

    if (fs.existsSync(NOTE_FILE)) {
        notes = read(NOTE_FILE);
    }

    user.title = encryptData(user.title, user.id);
    user.note = encryptData(user.note, user.id);
    notes.push(user);
    write(notes, NOTE_FILE);
    res.send(notes);
});

/**
 * PUT Request when the user updates a note
 * Update the note in the save file
 */
app.put('/api/notes/:id', (req, res) => {
    const notes = read(NOTE_FILE);
    const user = notes.find((b) => b.id === req.params.id);

    if (!user) { // 404 object not found
        res.status(404).send('The board with the given ID was not found.');
    } else {
        user.title = encryptData(req.body.title, user.id);
        user.note = encryptData(req.body.note, user.id);
        write(notes, NOTE_FILE);
        res.send(user);
    }
});

/**
 * GET Request when the user finds the list of boards
 * from the backend
 */
app.get('/api/boards', (req, res) => {
    const boards = read(MINESWEEPER_FILE);
    res.send(boards);
});

/**
 * GET Request when the user gets a board using
 * an id
 */
app.get('/api/boards/:id', (req, res) => {
    const boards = read(MINESWEEPER_FILE);
  
    const board = boards.find((b) => b.id === req.params.id);
  
    if (!board) { // 404 object not found
      res.status(404).send('The board with the given ID was not found.');
    } else {
        res.send(board);
    }
});

/**
 * POST Request add a save minesweeper game to the back-end
 */
app.post('/api/boards', (req, res) => {
    let boards = [];
  
    const unixTimestamp = Math.floor(Date.now());
  
    const board = {
      id: req.body.id,
      boardSize: req.body.boardSize,
      endGame: req.body.endGame,
      firstClick: req.body.firstClick,
      mineCounter: req.body.mineCounter,
      name: req.body.name,
      unixTime: unixTimestamp,
      paused: req.body.paused,
      counter: req.body.counter,
      totalMines: req.body.totalMines,
      boardData: req.body.boardData,
      start: req.body.start,
    };
  
    if (fs.existsSync(MINESWEEPER_FILE)) {
      boards = read(MINESWEEPER_FILE);
    }
  
    boards.push(board);
  
    write(boards, MINESWEEPER_FILE);
  
    res.send(board);
});

/**
 * PUT Request update an existing minesweeper save game
 */
app.put('/api/boards/:id', (req, res) => {
    const boards = read(MINESWEEPER_FILE);
  
    const board = boards.find((b) => b.id === req.params.id);
  
    if (!board) {
      return res.status(404).send('The board with the given ID was not found.');
    }
  
    const unixTimestamp = Math.floor(Date.now());
  
    board.unixTime = unixTimestamp;
    board.boardSize = req.body.boardSize;
    board.counter = req.body.counter;
    board.endGame = req.body.endGame;
    board.firstClick = req.body.firstClick;
    board.mineCounter = req.body.mineCounter;
    board.name = req.body.name;
    board.paused = req.body.paused;
    board.totalMines = req.body.totalMines;
    board.boardData = req.body.boardData;
    board.start = req.body.start;
  
    write(boards, MINESWEEPER_FILE);
  
    res.send(board);
});
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}\nThe Server is running`)
});

const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const FILE = 'saveFile.json';

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.CALLBACK_URL_FACEBOOK,
    profileFields: ['id', 'displayName', 'name'],
    enableProof: true
  },
  (accessToken, refreshToken, profile, done) => {
    profile.accessToken = accessToken;
    return done(null, profile);
  }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user);
});
  
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: 'http://localhost:3000', failureRedirect: 'http://localhost:3000' }),
  (req, res) => {
    res.redirect('/'); // Redirect to the React app or any desired URL after successful login
  }
);

app.get('/api/user/profile', (req, res) => {
    if (req.isAuthenticated()) {
        // The user is authenticated, send the profile stored in the session
        res.json(req.user);
    } else {
        // If the user is not authenticated, send an empty object or an error message
        res.json(null);
    }
});
  
app.get('/logout', async (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Logout failed:', err);
            return res.status(500).json({ message: 'Logout failed' });
        }
    });
    res.redirect('http://localhost:3000'); // Redirect the user to the home page or any other desired URL after logout
});

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
 * @param {*} notes The array of minesweeper games to save to the save file.
 */
const write = (notes) => {
    fs.writeFile(FILE, JSON.stringify(notes), function(err) {
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

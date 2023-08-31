const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const { encryptData, decryptData } = require('./cipher');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const _dirname = path.dirname('');
const buildPath = path.join(_dirname, '../build');
const FILE = 'saveFile.json';
const BASE_URL = '/';

app.use(express.static(buildPath));

/**
 * Display the Front-end when the users are
 * on the following pathname
 */
app.get(/^(?!\/(api|auth|logout)).+/, (req, res) => {
  res.sendFile(
      path.join(__dirname, '../build/index.html'),
      function(err) {
        if (err) {
          res.status(500).send(err);
        }
      },
  );
});

require('dotenv').config({ path: path.join(__dirname, '../.env') });

app.use(express.json());
app.use(cors({
    origin: BASE_URL,
    credentials: true,
}));

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

app.use(passport.initialize());
app.use(passport.session());

/**
 * Passport Facebook Strategy
 */
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

// Serialize user
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

/* Auth routes */

/**
 * GET Request when the user clicks the login button
 */
app.get('/auth/facebook', passport.authenticate('facebook'));

/**
 * GET Request when the user is redirected back to the app
 */
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: `/notepad`, failureRedirect: `/signin` }),
  (req, res) => {
    res.redirect('/');
  }
);

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
 * @param {*} notes The user and their notes to save to the save file.
 */
const write = (notes) => {
    fs.writeFile(FILE, JSON.stringify(notes), function(err) {
        if (err) throw err;
    });
};

/**
 * GET Request when the user finds the list of users
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
    const notes = read();
    const user = notes.find((b) => b.id === req.params.id);

    if (!user) { // 404 object not found
        res.status(404).send('The user with the given ID was not found.');
    }
    user.title = decryptData(user.title, user.id);
    user.note = decryptData(user.note, user.id);
    res.send(user);
});

/**
 * POST Request when the user creates a new note
 * Save the note to the save file
 */
app.post('/api/notes', (req, res) => {
    let notes = [];
    let user = req.body;

    if (fs.existsSync(FILE)) {
        notes = read();
    }

    user.title = encryptData(user.title, user.id);
    user.note = encryptData(user.note, user.id);
    notes.push(user);
    write(notes);
    res.send(notes);
});

/**
 * PUT Request when the user updates a note
 * Update the note in the save file
 */
app.put('/api/notes/:id', (req, res) => {
    const notes = read();
    const user = notes.find((b) => b.id === req.params.id);

    if (!user) { // 404 object not found
        res.status(404).send('The board with the given ID was not found.');
    }
    
    user.title = encryptData(req.body.title, user.id);
    user.note = encryptData(req.body.note, user.id);
    write(notes);
    res.send(user);
});
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}\nThe Server is running`)
});

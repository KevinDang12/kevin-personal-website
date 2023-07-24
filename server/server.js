const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let notes = [{name: "Kevin Dang", id: 123}];

/**
 * GET Request when the user finds the list of boards
 * from the backend
 */
app.get('/api', (req, res) => {
    res.send(notes);
});
  
  
const port = process.env.PORT || 5000;
app.listen(port, () =>
console.log(`Listening on port ${port}\nThe Server is running`),
);

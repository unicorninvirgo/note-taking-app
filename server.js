//import express packages
const express = require('express');
const path = require('path');
const api = require('./api/index.js');

const PORT = process.env.PORT || 3000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

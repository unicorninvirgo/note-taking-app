const notes = require('express').Router();
const { readFromFile, readAndAppend, removeFromFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//get route to retrieve all notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
       title,
       text,
       id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

notes.delete('/:id', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const noteid = req.params.id;
  
    if(noteid){
    removeFromFile(noteid, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });
  

module.exports = notes;

/*
readAndAppend(newFeedback, './db/feedback.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);

*/
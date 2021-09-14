const apiRoutes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// GET route for api notes
apiRoutes.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
    );
});

// POST Route for new Notes with a unique id
apiRoutes.post('/api/notes', (req, res) =>{
 console.log(req.body);

 const { title , text } = req.body;

 if (req.body) {
    const newNote = {
        title,
        text,
        id: uuidv4(),
    };

   readAndAppend(newNote, './db/db.json');
   res.json(`New note added ⭐️`);
 } else {
    res.error('Error in adding note');
 }
});

// DELETE route for a specific note
apiRoutes.delete('/api/notes/:id', (req, res) => {
    const activeNote = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.id !== activeNote);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${activeNote} has been deleted 🗑️`);
      });
  });

module.exports = apiRoutes;
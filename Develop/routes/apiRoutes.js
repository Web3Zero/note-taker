const express = require("express");
const router = express.Router();

// random id
const uuid = require("uuid");

const DB = require("../db/DB");

// get notes
router.get("/api/notes", async function (req, res) {
    const notes = await DB.readNotes();
    return res.json(notes);
  });

  // add a new note to json file
router.post("/api/notes", async function (req, res) {
    const currentNotes = await DB.readNotes();
    let newNote = {
      id: uuid(),
      title: req.body.title,
      text: req.body.text,
    };
  
    await DB.addNote([...currentNotes, newNote]);
  
    return res.send(newNote);
  });





  module.exports = router;
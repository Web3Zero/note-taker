const express = require("express");
const router = express.Router();

// random id
const uuid = require("uuid");

// get notes
router.get("/api/notes", async function (req, res) {
    const notes = await DB.readNotes();
    return res.json(notes);
  });
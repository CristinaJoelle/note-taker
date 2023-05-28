const router = require("express").Router();

//Requires the db.json where all the notes are stored
const notes = require("../Develop/db/db.json");

//A GET that reads and returns saved notes as a JSON
notes.get("/notes", (req, res) => {});

//A POST that posts new notes
notes.post("/notes", (req, res) => {});

//A DELETE that deletes notes
notes.delete("/notes" (req, res) => {});
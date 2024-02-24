const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { fetchAllNotes, addNote, updateNote, deleteNote } = require('../controllers/notes');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallnotes', fetchuser, fetchAllNotes)

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, addNote)

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, updateNote)

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, deleteNote)

module.exports = router
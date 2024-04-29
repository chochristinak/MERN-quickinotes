const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/notes
router.get('/', ensureLoggedIn, notesCtrl.index);
// GET /api/notes/:id
router.get('/', ensureLoggedIn, notesCtrl.show);

// POST /notes
router.post('/notes', ensureLoggedIn, notesCtrl.createNote);

router.get('/:id/edit', ensureLoggedIn, notesCtrl.edit)

router.put('/:id', ensureLoggedIn, notesCtrl.update)


module.exports = router;
const express = require('express');
const router = express.Router();
const historyCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/history
router.get('/', ensureLoggedIn, historyCtrl.index);

module.exports = router;
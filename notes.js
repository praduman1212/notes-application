const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notesController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, noteController.getNotes);

module.exports = router;

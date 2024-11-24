const express = require('express');
const { trackBacklinks } = require('../controllers/backlinkController');
const router = express.Router();

// Get backlinks data
router.get('/track-backlinks', trackBacklinks);

module.exports = router;

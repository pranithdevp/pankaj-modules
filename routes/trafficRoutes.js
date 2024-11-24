const express = require('express');
const { trackTraffic, getTrafficAnalytics } = require('../controllers/trafficController');
const router = express.Router();

// Track traffic data
router.post('/track-traffic', trackTraffic);

// Get analytics data
router.get('/analytics', getTrafficAnalytics);

module.exports = router;

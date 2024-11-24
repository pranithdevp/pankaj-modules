const mongoose = require('mongoose');

const trafficSchema = new mongoose.Schema({
  source: String, // Organic, Paid, etc.
  medium: String, // Email, Social Media, etc.
  userType: String, // New or Returning
  ip: String, // User IP Address
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Traffic', trafficSchema);

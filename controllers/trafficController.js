const Traffic = require('../models/Traffic');

const trackTraffic = async (req, res) => {
  const { source, medium, userType, ip } = req.body;

  try {
    const trafficData = new Traffic({
      source,
      medium,
      userType,
      ip,
      timestamp: new Date(),
    });
    await trafficData.save();
    res.status(201).send('Traffic data tracked successfully.');
  } catch (error) {
    res.status(500).send('Error tracking traffic: ' + error.message);
  }
};

const getTrafficAnalytics = async (req, res) => {
  try {
    const analytics = await Traffic.find();
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).send('Error fetching analytics: ' + error.message);
  }
};

module.exports = { trackTraffic, getTrafficAnalytics };

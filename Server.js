const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const trafficRoutes = require('./routes/trafficRoutes');
const backlinkRoutes = require('./routes/backlinkRoutes'); // Optional if backlinks are needed

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/traffic', trafficRoutes);
app.use('/api/backlinks', backlinkRoutes); // Optional

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error('Database connection error:', error));

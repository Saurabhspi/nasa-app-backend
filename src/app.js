const express = require('express');
const neoWsRoutes = require('./routes/neoWsRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use routes
app.use('/api', neoWsRoutes);
app.use('/api', mediaRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello from the NASA API backend!');
});

// Example route for NeoWs (add this if you want)
app.get('/api/neo', (req, res) => {
  res.json({ message: "This is the NeoWs endpoint" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

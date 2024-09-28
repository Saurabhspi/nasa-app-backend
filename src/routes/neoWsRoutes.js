const express = require('express');
const { getNeoData } = require('../services/neoWsService');

const router = express.Router();

router.get('/asteroids', async (req, res) => {
  const { startDate, endDate } = req.query;

  // Validate query parameters
  if (!startDate || !endDate) {
    return res.status(400).json({ message: 'Start date and end date are required' });
  }

  try {
    const data = await getNeoData(startDate, endDate);
    res.json(data);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: 'Error fetching asteroid data' });
  }
});

module.exports = router;

const express = require('express');
const { getNeoData } = require('../services/neoWsService');

const router = express.Router();

router.get('/asteroids', async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const data = await getNeoData(startDate, endDate);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching asteroid data' });
  }
});

module.exports = router;

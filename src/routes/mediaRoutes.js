const express = require('express');
const { searchMedia } = require('../services/mediaService');

const router = express.Router();

router.get('/media', async (req, res) => {
  const { query, mediaType } = req.query;
  try {
    const data = await searchMedia(query, mediaType);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching media data' });
  }
});

module.exports = router;

const express = require('express');
const { searchMedia } = require('../services/mediaService');

const router = express.Router();

router.get('/media', async (req, res) => {
  const { query, mediaType } = req.query;

  // Validate query parameters
  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  const validMediaTypes = ['image', 'video', 'audio']; // Define acceptable media types
  if (mediaType && !validMediaTypes.includes(mediaType)) {
    return res.status(400).json({ message: 'Invalid media type' });
  }

  try {
    const data = await searchMedia(query, mediaType);
    res.json(data);
  } catch (error) {
    console.error(error); // Log the error for server-side debugging
    res.status(500).json({ message: 'Error fetching media data' });
  }
});

module.exports = router;

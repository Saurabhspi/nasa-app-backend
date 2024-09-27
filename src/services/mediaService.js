const axios = require('axios');

const API_KEY = 'NFihUcibPkf1cDEr1h20d4PyMMht8eVfhfOGdiXy'; // Replace with your API key
const BASE_URL = 'https://images-api.nasa.gov'; // Base URL for the NASA Image and Video Library API

// Function to fetch media based on a search term
const fetchMediaBySearchTerm = async (searchTerm) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                q: searchTerm,
                media_type: 'image,video', // Optional: specify media types
                api_key: API_KEY
            }
        });
        return response.data.collection.items; // Return the media items
    } catch (error) {
        console.error('Error fetching media:', error);
        throw error; // Throw error for handling in the calling function
    }
};

// Function to fetch all media items (optional, adjust as needed)
const fetchAllMedia = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/search`);
        return response.data.collection.items; // Return all media items
    } catch (error) {
        console.error('Error fetching all media:', error);
        throw error;
    }
};

// Export functions for use in other parts of the application
module.exports = {
    fetchMediaBySearchTerm,
    fetchAllMedia
};

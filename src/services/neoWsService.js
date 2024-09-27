const getNeoData = async (startDate, endDate) => {
    try {
      const response = await axios.get(`${BASE_URL}/feed`, {
        params: {
          start_date: startDate,
          end_date: endDate,
          api_key: API_KEY
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching NeoWs data:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
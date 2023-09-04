import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorldClock from './WorldClock';

const WorldClocks = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://api.timezonedb.com/v2.1/list-time-zone',
          {
            params: {
              key: 'PGD2Y0L70ZI3', // Replace with your TimezoneDB API key
              format: 'json',
            },
          }
        );

        // Extract relevant data from the API response
        const extractedData = response.data.zones.map((zone) => ({
          timezone: zone.zoneName,
          utc_offset: zone.utcOffset / 3600,
        }));

        setCountries(extractedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="world-clocks">
      {countries.map((country, index) => (
        <WorldClock key={index} country={country} />
      ))}
    </div>
  );
};

export default WorldClocks;

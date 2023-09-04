import React, { useEffect } from 'react';
import AnalogClock from 'react-analog-clock';

const WorldClock = ({ country }) => {
  // Use useEffect to handle side effects when props change
  useEffect(() => {
    // Your data fetching or side effect logic here
    // Make sure to conditionally trigger these actions based on props changes.
  }, [country]); // This will run the effect whenever the 'country' prop changes

  return (
    <div className="world-clock">
      <AnalogClock
        width={200}
        gmtOffset={country.utc_offset / 3600} // UTC offset in hours
      />
      <p>{country.timezone.split('/')[1]}</p>
    </div>
  );
};

export default WorldClock;

import React, { useState, useEffect } from 'react';

function CitiesList({ selectedState, setSelectedCity,  selectedCity  }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      fetch(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
        .then((response) => response.json())
        .then((data) => setCities(data));
    }
  }, [selectedState]);

  return (
    <div>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.cityId} value={city.cityName}>
            {city.cityName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitiesList;

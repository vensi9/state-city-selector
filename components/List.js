import React, { useState, useEffect } from 'react';
import CitiesList from './CitiesList';

function List() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch the list of states from the API
    fetch('http://api.minebrat.com/api/v1/states') // Use the full URL
    .then((response) => response.json())
    .then((data) => setStates(data))
    .catch((error) => console.error(error)); // Add error handling
}, []);

const handleSubmit = () => {
    // Check if both state and city are selected
    if (selectedState && selectedCity) {
      // Use router.push to navigate to the Result component
      router.push(`/result?state=${selectedState}&city=${selectedCity}`);
    } else {
      // Handle the case where state or city is not selected
      alert('Please select both a state and a city');
    }
  };

  return (
    <div>
      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.id} value={state.stateId}>
            {state.stateName}
          </option>
        ))}
      </select>
      <CitiesList selectedState={selectedState} setSelectedCity={setSelectedCity} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default List;

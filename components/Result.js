import React from 'react';

function Result({ selectedCity, selectedState }) {
  return (
    <div>
      <h1>You Have selected {selectedCity}, {selectedState}</h1>
    </div>
  );
}

export default Result;

import React from 'react';

const Filters = ({ onFilterClick }) => {
  return (
    <div className="filters">
      <button onClick={onFilterClick}>Show Liked</button>
    </div>
  );
};

export default Filters;

// src/components/Projections.jsx
import React, { useState } from 'react';
import ProjectionIframe from './ProjectionIframe';

const Projections = () => {
  const [selectedCategory, setSelectedCategory] = useState('QB');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="QB">Quarterback (QB)</option>
        <option value="RB">Running Back (RB)</option>
        <option value="WR">Wide Receiver (WR)</option>
        <option value="TE">Tight End (TE)</option>
      </select>
      <ProjectionIframe category={selectedCategory} />
    </div>
  );
};

export default Projections;

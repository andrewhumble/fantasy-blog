// src/components/ProjectionIframe.jsx
import React from 'react';

const ProjectionIframe = ({ category }) => {
  const iframeSrc = {
    QB: '/rankings/plotly/predictions_QB.html',
    RB: '/rankings/plotly/predictions_RB.html',
    WR: '/rankings/plotly/predictions_WR.html',
    TE: '/rankings/plotly/predictions_TE.html',
  };

  return (
    <iframe
      src={iframeSrc[category]}
      width="100%"
      height="600"
      frameBorder="0"
      title={`${category} Projections`}
      key={category} // Ensure re-render by changing key
    ></iframe>
  );
};

export default ProjectionIframe;

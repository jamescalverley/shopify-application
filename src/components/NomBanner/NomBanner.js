import React from 'react';
import './NomBanner.css';

function NomBanner(props) {

  return (
    <div className="nom-banner">
      <h3>Maximum number of nominations reached!</h3>
      <h4>Thank you for your submissions.</h4>
    </div>
  );
} 

export default NomBanner;
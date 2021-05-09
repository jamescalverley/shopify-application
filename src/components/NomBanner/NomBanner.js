import React from 'react';
import './NomBanner.css';

function NomBanner(props) {

  const nomNum = 5 - props.nominees.length;
  
  return (
    <div className="nom-banner">
      <h3>{nomNum} {nomNum === 1 ? "nomination available" : "nominations available"}</h3>
    </div>
  );
} 

export default NomBanner;
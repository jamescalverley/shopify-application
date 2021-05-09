import React from 'react';
import './Nominations.css';
import { v4 as uuidv4 } from 'uuid';

function Nominations(props) {
  return (
    <div className="nominations">
      <h1>Nominations</h1>
      {props.nominees.map( n => 
        <h2 key={uuidv4()}>{n.title}</h2>  
      )}
    </div>
  );
}

export default Nominations;
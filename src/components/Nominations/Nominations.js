import React from 'react';
import './Nominations.css';
import { v4 as uuidv4 } from 'uuid';
import MovieNominee from '../MovieNominee/MovieNominee';

function Nominations(props) {

  const nomNum = 5 - props.nominees.length;

  return (
    <div className="nominations">
      <h1>Nominations</h1>
      
      { props.nominees.length === 0 ?
        <h4>Vote on your favourite movies!</h4>
        :
        <h4><span>{nomNum}</span> remaining</h4>
      }
      <div className="nominee-container">
        {props.nominees.map( n => 
          <MovieNominee 
            key={uuidv4()} 
            movie={n}
            dropNominee={props.dropNominee}
          />
        )}
      </div>
      
    </div>
  );
}

export default Nominations;
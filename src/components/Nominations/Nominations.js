import React from 'react';
import './Nominations.css';
import { v4 as uuidv4 } from 'uuid';
import MovieNominee from '../MovieNominee/MovieNominee';


function Nominations(props) {
  return (
    <div className="nominations">
      <h1>Nominations</h1>
      {props.nominees.map( n => 
        <MovieNominee 
          key={uuidv4()} 
          movie={n}
          dropNominee={props.dropNominee}
        />
      )}
    </div>
  );
}

export default Nominations;
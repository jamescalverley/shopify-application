import React from 'react';
import './MovieNominee.css';

function MovieNominee(props) {
  
  return (
    <div className="movie-nominee">
      <div className="movie-nominee__info">
        <h3>{props.movie.Title}</h3>
        <h4>{props.movie.Year}</h4>
      </div>
      <div className="button-container">
        <button onClick={() => props.dropNominee( props.movie )}>X</button>
      </div>
      
    </div>
  );
}

export default MovieNominee;
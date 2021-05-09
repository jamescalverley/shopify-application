import React from 'react';
import './MovieNominee.css';

function MovieNominee(props) {
  return (
    <div className="movie-nominee">
      <div className="movie-nominee__info">
        <h3>{props.movie.Title}</h3>
        <h4>{props.movie.Year}</h4>
      </div>
      
      <button onClick={() => props.dropNominee( props.movie )}>X</button>
    </div>
  );
}

export default MovieNominee;
import React from 'react';
import './MovieNominee.css';

function MovieNominee(props) {
  return (
    <div className="movie-nominee">
      <h4>{props.movie.Title}</h4>
      <h4>{props.movie.Year}</h4>
      <button onClick={() => props.dropNominee( props.movie )}>Remove</button>
    </div>
  );
}

export default MovieNominee;
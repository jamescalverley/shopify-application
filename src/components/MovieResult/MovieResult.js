import React from 'react';
import './MovieResult.css';

function MovieResult(props) {

  const handleNominee = () => {
    console.log("adding movie to nominations");
    const movieData = { title: props.title, year: props.year }

    props.nominateMovie( movieData );
  };

  return (
    <div className="movie-result">
      <h4>{props.title}</h4>
      <h5>{props.year}</h5>
      <img src={props.image} alt="movie-poster" />
      <button onClick={handleNominee}>Nominate</button>
    </div>
  );
}

export default MovieResult;
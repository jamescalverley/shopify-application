import React from 'react';
import './MovieResult.css';

function MovieResult(props) {

  const handleNominee = () => {
    console.log("adding movie to nominations");
    const movieData = { title: props.title, year: props.year }
    props.nominateMovie( movieData );
  };

  const poster = props.image !== "N/A" ? props.image : "https://via.placeholder.com/150"

  return (
    <div className="movie-result">
      <h4>{props.title}</h4>
      <h5>{props.year}</h5>
      <img src={poster} alt="movie-poster" />
      { props.nominees.length < 5 &&
        <button onClick={handleNominee}>Nominate</button>
      }
      
    </div>
  );
}

export default MovieResult;
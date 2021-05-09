import React from 'react';
import './MovieResult.css';

function MovieResult(props) {

  const handleNominee = () => {
    console.log("adding movie to nominations");
    const movieData = { Title: props.title, Year: props.year,  }
    props.nominateMovie( movieData );
  };

  const poster = props.image ? props.image : "https://via.placeholder.com/150"

  const btnDisplay = props.nominees.some( movie => movie.Title === props.movie.Title && movie.Year === props.movie.Year ) ? false : true;
  
  return (
    <div className="movie-result">
      <h4>{props.movie.Title}</h4>
      <h5>{props.movie.Year}</h5>
      <img src={poster} alt="movie-poster" />
      { props.nominees.length < 5 && btnDisplay ?
        <button onClick={handleNominee}>Nominate</button>
        :
        <></>
      }
    </div>
  );
}

export default MovieResult;
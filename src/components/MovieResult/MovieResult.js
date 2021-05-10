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
      <div className="movie-header">
        <img src={poster} alt="movie-poster" />
        <div className="movie-info">
          <h2>{props.movie.Title}</h2>
          <h3>{props.movie.Year}</h3>
        </div>
      </div>
      <div className="movie-nominate">
        { props.nominees.length < 5 &&
          <div>
            { btnDisplay ?
              <div className="unchecked button" onClick={handleNominee}>Nominate</div>
              :
              <div className="checked button">Nominated</div>
          }
          </div>
        }
      </div>
    </div>
  );
}

export default MovieResult;
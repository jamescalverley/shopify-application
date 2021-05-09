import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import MovieResult from '../MovieResult/MovieResult';
import './Search.css';
import { v4 as uuidv4 } from 'uuid';
const axios = require('axios');

function Search(props) {

  const [ movies, setMovies ] = useState([]);
  //const [ searchTerm, setSearchTerm ] = useState("");


  const searchMovie = async ( movie ) => {
    console.log("calling API");
    const result = await axios.get(`/api/search/${movie}`);
    const movieList = result.data.data.Search;
    console.log("Movies -- ", result.data.data.Search );
    setMovies( movieList )
  }; 

  return (
    <div className="search">
      <div className="search-form">
        Search Movies
        <SearchInput searchMovie={searchMovie}/>
      </div>
      <div className="search-results">
        { movies.map( m => 
          <MovieResult 
            title={m.Title} 
            year={m.Year} 
            image={m.Poster} 
            key={uuidv4()}
            nominateMovie={props.nominateMovie}
          />
        )}
      </div>
      
    </div>
  );
}

export default Search;
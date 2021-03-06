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
    const movieList = result.data.data;
    console.log("Movies -- ", movieList );
    setMovies( movieList )
  }; 

  return (
    <div className="search">
      <div className="search-form">
        <h1>Search Movies</h1>
        <SearchInput searchMovie={searchMovie}/>
      </div>
      <div className="search-results">
        { movies.map( m => 
          <MovieResult 
            movie={m}
            title={m.Title} 
            year={m.Year} 
            image={m.Poster} 
            key={uuidv4()}
            nominees={props.nominees}
            nominateMovie={props.nominateMovie}
          />
        )}
      </div>
      
    </div>
  );
}

export default Search;
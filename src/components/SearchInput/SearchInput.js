import React, { useState } from 'react';
import './SearchInput.css';

function SearchInput(props) {

  const [ searchTerm, setSearchTerm ] = useState("");

  const handleSearch = (ev) => {
    ev.preventDefault();
    props.searchMovie( searchTerm );
    clearForm();
  };

  const handleInput = (ev) => {
    setSearchTerm(ev.target.value);
  }
  const clearForm = () => {
    const form = document.getElementById('searchInput');
    form.value = "";
  };
  
  return (
    <form onSubmit={handleSearch}>
      <input id="searchInput" type="text" placeholder="movie title" onChange={handleInput}></input>
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}

export default SearchInput
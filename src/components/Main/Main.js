import React from 'react';
import './Main.css';
import Search from '../Search/Search';
import Nominations from '../Nominations/Nominations';

function Main() {
  return (
    <div className="main">
      <div className="search-container">
        <Search />
      </div>
      <div className="nominations-container">
        <Nominations />
      </div> 
    </div>
  );
}

export default Main;
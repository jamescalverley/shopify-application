import React, { useState } from 'react';
import './Main.css';
import Search from '../Search/Search';
import Nominations from '../Nominations/Nominations';

function Main() {

  const [ nominees, setNominees ] = useState([ { title: "TEST"} ])
  console.log("Nominees", nominees );

  const nominateMovie = ( movie ) => {
    console.log("nominating movie", movie);
    if ( nominees.length < 5 ){
      setNominees( [ ...nominees,  movie ] )
    }
    
  };

  return (
    <div className="main">
      <div className="search-container">
        <Search nominateMovie={nominateMovie} />
      </div>
      <div className="nominations-container">
        <Nominations nominees={nominees} />
      </div> 
    </div>
  );
}

export default Main;
import React, { useState } from 'react';
import './Main.css';
import Search from '../Search/Search';
import Nominations from '../Nominations/Nominations';
import NomBanner from '../NomBanner/NomBanner';

function Main() {

  const [ nominees, setNominees ] = useState([]);

  const nominateMovie = ( movie ) => {
    console.log("nominating movie", movie);
    if ( nominees.length < 5 ){
      setNominees( [ ...nominees,  movie ] )
    }

  };

  const dropNominee = ( movie ) => {
    console.log("drop nomination", movie);
    const newArr = nominees.filter( n => n !== movie);
    setNominees( newArr );
  };
  
  return (
    <>
      { nominees.length === 5 &&
        <NomBanner />
      }    
      <div className="main">
        <div className="search-container">
          <Search nominateMovie={nominateMovie} nominees={nominees} />
        </div>
        <div className="nominations-container">
          <Nominations nominees={nominees} dropNominee={dropNominee} />
        </div> 
      </div>
    </>
  );
}

export default Main;
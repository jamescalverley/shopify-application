const fetch = require('node-fetch');
require('dotenv').config(); 

const movieSearch = async (req,res) => {
  try {
    console.log("Incoming request", req.url);
    console.log(req.params)
    const searchTerm = req.params.searchterm;
    const apiKey = process.env.API_KEY;
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=movie`;
    const apiResult = await fetch( apiURL )
      .then( res => res.json() )
      .catch( err => console.log(err) )
    const movieData = apiResult.Search.filter( m => m.Poster !== "N/A");
    console.log("MovieData", movieData.length)
    res.status(200).json({
      success: true, 
      data: movieData
    })
  } catch (err ){
    return res.status(500).json({
      success: false,
      error: err
    })
  };
};

module.exports = { movieSearch }
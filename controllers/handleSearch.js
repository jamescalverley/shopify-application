const movieSearch = (req,res) => {
  try {
    console.log("Incoming request", req.url)
    res.status(200).json({
      success: true, 
      data: { test: "This is a test" }
    })
  } catch (err ){
    return res.status(500).json({
      success: false,
      error: err
    })
  };
};

module.exports = { movieSearch }
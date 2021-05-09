const express = require('express');
const router = express.Router();

const { movieSearch } = require('../controllers/handleSearch');

router
  .route('/search/:searchterm')
  .get( movieSearch )

module.exports = router;
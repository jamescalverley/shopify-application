const express = require('express');
const router = express.Router();

const { movieSearch } = require('../controllers/handleSearch');

router
  .route('/search')
  .get( movieSearch )

module.exports = router;
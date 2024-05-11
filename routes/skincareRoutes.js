const express = require('express');
const router = express.Router();
const { getBrands } = require('../controllers/skincareController');

// Route to get all brands
router.get('/', getBrands);

module.exports = router;

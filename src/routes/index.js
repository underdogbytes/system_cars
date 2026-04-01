const express = require('express');
const router = express.Router();

const carsRoutes = require('./cars');

router.use('/cars', carsRoutes);

module.exports = router;
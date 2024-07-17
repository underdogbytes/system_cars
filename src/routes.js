const express = require('express');
const router = express.Router();

// CONTROLLERS:
const CarController = require('./controllers/CarController');

router.get('/cars', CarController.getAll);
router.get('/car/id=:id', CarController.getById);
router.get('/car/plate=:plate', CarController.getByPlate);
router.post('/car', CarController.createCar);
router.put('/car/:id', CarController.editCar);
router.delete('/car/:id', CarController.deleteCar);
module.exports = router;
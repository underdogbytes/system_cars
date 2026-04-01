const express = require('express');
const router = express.Router();

const CarController = require('../controllers/CarController');

router.get('/', CarController.getAll);
router.get('/:id', CarController.getById);
router.get('/plate/:plate', CarController.getByPlate);
router.post('', CarController.createCar);
router.put('/:id', CarController.editCar);
router.delete('/:id', CarController.deleteCar);

module.exports = router;
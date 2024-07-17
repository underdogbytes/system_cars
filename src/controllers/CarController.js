const CarService = require('../services/CarService');

module.exports = {
  getAll: async (req, res) => {
    try {
      const cars = await CarService.getAll();
      res.json({ error: '', result: cars });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const car = await CarService.getById(req.params.id);
      if (car) {
        res.json({ error: '', result: car });
      } else {
        res.status(404).json({ error: 'Car not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getByPlate: async (req, res) => {
    try {
      const plate = req.params.plate;
      let car = await CarService.getByPlate(plate);
      let json = { error: '', result: car ? car : {} };
      res.json(json);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCar: async (req, res) => {
    try {
      let json = { error: '', result: {} }
      
      let { id, model, plate, color } = req.body;
      
      if (!id || !model || !plate || !color) {
        throw new Error("All fields are required.");
      }

      let newCar = await CarService.createCar(id, model, plate, color);

      if (newCar) {
        json.result = { id, model, plate, color }
      } else {
        throw new Error("Failed to add new car");
      }
      res.json(json);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  editCar: async (req, res) => {
    try {
      let json = { error: '', result: {} }

      let { id, model, plate, color } = req.body;
      await CarService.editCar(id, model, plate, color);
      json.result = { model, plate, color }
      res.json(json);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCar: async (req, res) => {
    try {
      let json = { error: '', result: {} }
      let { id } = req.params;
      await CarService.deleteCar(id);
      res.json(json)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
const db = require('../db');

class CarModel {
  constructor(id, model, plate, color) {
    this.id = id;
    this.model = model;
    this.plate = plate;
    this.color = color;
  }
}

module.exports = CarModel;
const db = require('../db');

class CarModel {
  #id;
  #model;
  #plate;
  #color;
  constructor(id, model, plate, color) {
    this.#id = id;
    this.#model = model;
    this.#plate = plate;
    this.#color = color;
  }

  toJSON() {
    return {
      id: this.#id,
      model: this.#model,
      plate: this.#plate,
      color: this.#color
    };
  }
}

module.exports = CarModel;
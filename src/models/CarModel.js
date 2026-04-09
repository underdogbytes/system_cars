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

  // Getters
  get id() { return this.#id; }
  get model() { return this.#model; }
  get plate() { return this.#plate; }
  get color() { return this.#color; }

  // Setters
  set id(value) { return this.#id = value; }
  set model(value) { return this.#model = value; }
  set plate(value) { return this.#plate = value; }
  set color(value) { return this.#color = value; }
}

module.exports = CarModel;
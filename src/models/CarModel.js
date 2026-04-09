const db = require('../db');

class CarModel {
  #id;
  #model;
  #plate;
  #color;

  constructor(id, model, plate, color) {
    let errors = [];
    let properties = {
      "id": id,
      "modelo": model,
      "placa": plate,
      "cor": color
    };

    for (let property in properties) {
      let error = this.#validarObrigatorio(properties[property], property);
      if (error) {
        errors.push(error);
      }
    }

    if (errors.length > 0) {
      let plural = errors.length > 1 ? true : false;
      throw new Error(`O${plural ? 's' : ''} campo${plural ? 's' : ''} ${errors.join(', ')} ${plural ? 'são' : 'é'} obrigatório${plural ? 's' : ''}`);
    }

    this.#id = id;
    this.#model = model;
    this.#plate = plate;
    this.#color = color;
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

  // Auxiliares
  toJSON() {
    return {
      id: this.#id,
      model: this.#model,
      plate: this.#plate,
      color: this.#color
    };
  }

  #validarObrigatorio(value, property) {
    if (!value || (typeof value === 'string' && value.trim() === "")) {
      return property
    }
  }
}

module.exports = CarModel;
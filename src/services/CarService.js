const { query } = require('express');
const db = require('../db');
const CarModel = require('../models/CarModel')

module.exports = {
  getAll: () => {
    return new Promise((resolve, rejected) => {
      db.query('SELECT * FROM cars', (error, results) => {
        if (error) { rejected(error); return; }

        try {
          const cars = results.map(row => new CarModel(row.id, row.model, row.plate, row.color));
          resolve(cars);
        } catch (error) {
          rejected(error);
        }
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM cars WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length > 0) {
            const row = results[0];
            resolve(new CarModel(row.id, row.model, row.plate, row.color));
          } else {
            resolve(null);
          }
        }
      });
    });
  },

  getByPlate: (plate) => {
    return new Promise((resolve, rejected) => {
      db.query(`SELECT * FROM cars WHERE plate = ?`, [plate], (error, results) => {
        if (error) { rejected(error); return; }
        resolve(results)
      })
    })
  },

  createCar: (id, model, plate, color) => {
    return new Promise((resolve, rejected) => {
      try {
        new CarModel(id, model, plate, color);
      } catch (error) {
        return rejected(error);
      }

      db.query(
        'INSERT INTO cars (id, model, plate, color) VALUES (?, ?, ?, ?)',
        [id, model, plate, color],
        (error, results) => {
          if (error) {
            if (error.code === 'ER_DUP_ENTRY') {
              rejected(new Error('Já existe um veículo cadastrado com este ID.'));
            } else {
              rejected(error);
            }
            return;
          }
          resolve(results);
        }
      );
    });
  },

  editCar: async (id, model, plate, color) => {
    const originalCar = await module.exports.getById(id);

    if (!originalCar) {
      throw new Error('Carro inexistente.');
    }

    let finalModel = model !== undefined ? model : originalCar.model;
    let finalPlate = plate !== undefined ? plate : originalCar.plate;
    let finalColor = color !== undefined ? color : originalCar.color;

    new CarModel(id, finalModel, finalPlate, finalColor);

    return new Promise((resolve, rejected) => {
      db.query(
        `UPDATE cars SET model = ?, plate = ?, color = ? WHERE id = ?`,
        [finalModel, finalPlate, finalColor, id],
        (error, results) => {
          if (error) { rejected(error); return; }
          resolve(results);
        }
      )
    });
  },

  deleteCar: (id) => {
    return new Promise((resolve, rejected) => {
      db.query(`DELETE FROM cars WHERE id = ?`, [id], (error, results) => {
        if (error) {
          rejected(error);
          return;
        }
        resolve(results);
      });
    });
  }
};
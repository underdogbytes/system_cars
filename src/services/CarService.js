const { query } = require('express');
const db = require('../db');
const CarModel = require('../models/CarModel')

module.exports = {
  getAll: () => {
    return new Promise((resolve, rejected) => {
      db.query('SELECT * FROM cars', (error, results) => {
        if (error) { rejected(error); return; }
        const cars = results.map(row => new CarModel(row.id, row.model, row.plate, row.color));
        resolve(cars);
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
      db.query(
        'INSERT INTO cars (id, model, plate, color) VALUES (?, ?, ?, ?)',
        [id, model, plate, color],
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
          resolve(results);
        }
      );
    });
  },

  editCar: (id, model, plate, color) => {
    return new Promise((resolve, rejected) => {
      let updateFields = { id, model, plate, color };
      let params = [];
      let sqlParts = [];

      for (let field in updateFields) {
        if (updateFields[field] !== undefined) {
          sqlParts.push(`${field} = ?`);
          params.push(updateFields[field]);
        }
      }

      params.push(id);
      let sql = `UPDATE cars SET ${sqlParts.join(', ')} WHERE id = ?`;

      db.query(
        sql,
        params,
        (error, results) => {
          if (error) {
            rejected(error);
            return;
          }
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
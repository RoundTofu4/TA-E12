const db = require('../config/db');

const Data = {
    create: (data, callback) => {
        const query = 'INSERT INTO data (name, value) VALUES (?, ?)';
        db.execute(query, [data.name, data.value], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM data';
        db.execute(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM data WHERE id = ?';
        db.execute(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    update: (id, data, callback) => {
        const query = 'UPDATE data SET name = ?, value = ? WHERE id = ?';
        db.execute(query, [data.name, data.value, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM data WHERE id = ?';
        db.execute(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
};

module.exports = Data;

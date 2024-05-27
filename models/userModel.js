const db = require('../config/db');

const User = {
    create: (user, callback) => {
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.execute(query, [user.username, user.password], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    findByUsername: (username, callback) => {
        const query = 'SELECT * FROM users WHERE username = ?';
        db.execute(query, [username], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.execute(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    // Add more methods for CRUD operations
};

module.exports = User;

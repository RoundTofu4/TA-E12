const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '34.42.221.134',
    user: 'root',
    password: '',
    database: 'wishlist'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

module.exports = db;

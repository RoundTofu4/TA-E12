const User = require('../models/userModel');

const getUserById = (req, res) => {
    User.findById(req.userId, (err, user) => {
        if (err) return res.status(500).send({ message: 'Error finding user.' });
        if (!user) return res.status(404).send({ message: 'User not found.' });

        res.status(200).send(user);
    });
};

// Tambahkan operasi CRUD lainnya sesuai kebutuhan

module.exports = { getUserById };

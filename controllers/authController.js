const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const secret = 'jwt'; // Ganti dengan secret key Anda

const register = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: 'Please provide username and password.' });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).send({ message: 'Error hashing password.' });

        const newUser = { username, password: hashedPassword };

        User.create(newUser, (err, result) => {
            if (err) return res.status(500).send({ message: 'Error creating user.' });
            res.status(201).send({ message: 'User created successfully.' });
        });
    });
};

const login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: 'Please provide username and password.' });
    }

    User.findByUsername(username, (err, user) => {
        if (err) return res.status(500).send({ message: 'Error finding user.' });
        if (!user) return res.status(404).send({ message: 'User not found.' });

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).send({ message: 'Error comparing passwords.' });
            if (!isMatch) return res.status(401).send({ message: 'Invalid password.' });

            const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
            res.status(200).send({ message: 'Login successful', token });
        });
    });
};

module.exports = { register, login };

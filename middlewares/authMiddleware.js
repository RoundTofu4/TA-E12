const jwt = require('jsonwebtoken');
const secret = 'jwt'; // Ganti dengan secret key Anda

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).send({ message: 'No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: 'Failed to authenticate token.' });
        }

        req.userId = decoded.id;
        next();
    });
};

module.exports = authMiddleware;

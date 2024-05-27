const express = require('express');
const router = express.Router();
const { getUserById } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/me', authMiddleware, getUserById);

// Tambahkan rute untuk operasi CRUD lainnya

module.exports = router;

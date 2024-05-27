const express = require('express');
const router = express.Router();
const { createData, getAllData, getDataById, updateData, deleteData } = require('../controllers/dataController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createData);
router.get('/', authMiddleware, getAllData);
router.get('/:id', authMiddleware, getDataById);
router.put('/:id', authMiddleware, updateData);
router.delete('/:id', authMiddleware, deleteData);

module.exports = router;

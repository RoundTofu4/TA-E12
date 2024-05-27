const Data = require('../models/dataModel');

const createData = (req, res) => {
    const { name, value } = req.body;

    if (!name || !value) {
        return res.status(400).send({ message: 'Please provide name and value.' });
    }

    const newData = { name, value };

    Data.create(newData, (err, result) => {
        if (err) return res.status(500).send({ message: 'Error creating data.' });
        res.status(201).send({ message: 'Data created successfully.', dataId: result.insertId });
    });
};

const getAllData = (req, res) => {
    Data.findAll((err, data) => {
        if (err) return res.status(500).send({ message: 'Error fetching data.' });
        res.status(200).send(data);
    });
};

const getDataById = (req, res) => {
    const { id } = req.params;

    Data.findById(id, (err, data) => {
        if (err) return res.status(500).send({ message: 'Error fetching data.' });
        if (!data) return res.status(404).send({ message: 'Data not found.' });

        res.status(200).send(data);
    });
};

const updateData = (req, res) => {
    const { id } = req.params;
    const { name, value } = req.body;

    if (!name || !value) {
        return res.status(400).send({ message: 'Please provide name and value.' });
    }

    const updatedData = { name, value };

    Data.update(id, updatedData, (err, result) => {
        if (err) return res.status(500).send({ message: 'Error updating data.' });
        res.status(200).send({ message: 'Data updated successfully.' });
    });
};

const deleteData = (req, res) => {
    const { id } = req.params;

    Data.delete(id, (err, result) => {
        if (err) return res.status(500).send({ message: 'Error deleting data.' });
        res.status(200).send({ message: 'Data deleted successfully.' });
    });
};

module.exports = { createData, getAllData, getDataById, updateData, deleteData };

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');
const db = require('./config/db');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/data', dataRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

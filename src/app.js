require('express-async-errors');
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./Middleware/middleware.error');

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorMiddleware);


module.exports = app;

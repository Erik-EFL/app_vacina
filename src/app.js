const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('./Middleware/middleware.error');
const routes = require('./routes/export.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', routes.register)

app.use(errorMiddleware);


module.exports = app;

const express = require('express');
const app = express();
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const db = require('./config/database');

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(logger(':method :url :status :response-time ms :remote-addr'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/companies', require('./routes/companies'));
app.use('/users', require('./routes/users'));

db.authenticate().then(() => console.log('DB connected.')).catch(console.log);
db.sync().then(() => console.log('Sync done'));

module.exports = app;

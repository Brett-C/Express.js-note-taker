const express = require('express');

const apiRouter = require('../routes/apiRoutes');
const htmlRouter = require('../routes/htmlRoutes');

const app = express();



app.use('/api', apiRouter);
app.use('/html', htmlRouter);

module.exports = app;
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users/', require('./routes/users'));
app.use('/api/tasks/', require('./routes/tasks'));


app.listen(PORT || 5000, () => {
  console.log(`Server is listening on PORT = ${PORT || 5000}`)
})


module.exports = app;

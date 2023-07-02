const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();

// ##### mongoose #####
mongoose.set('strictQuery', true);

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Data Base Connected Sucessfully!"))
    .catch((error) => console.log(error));

app.use('/api/v1', require('./src/routes'));

// ##### server port #####
app.listen(process.env.PORT || 5000, () => {
    console.log(`Magic happends on Port: ${process.env.PORT || 5000}`);
});

module.exports = app;

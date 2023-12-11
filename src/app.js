const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/spacex');


app.use(express.urlencoded());
app.use(express.json());

const launchRoute = require('./routes/launchRoute');

app.use('/launches', launchRoute);

app.listen(port, ()=> {
    console.log('')
})
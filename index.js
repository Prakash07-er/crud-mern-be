require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const crudRoute = require('./Routes/crudRoute')

const app = express();
app.use(express.json())

// local server connection
const port = process.env.port || 3005

// mongodb connection
const URI = process.env.MONGO_URL
mongoose.connect(URI, (err, result) => {
    if(err) throw err;
    console.log("::: Successfully connected to mongoDb server :::");
})


app.use('/', crudRoute )


app.listen(port , () => console.log(`::: Your app runs with the port ${port}:::`));

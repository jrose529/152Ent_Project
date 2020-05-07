const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => { console.log("MongoDB database connection established successfully"); })

const resRouter = require('./routes/reservation');
const segRouter = require('./routes/segment');

app.use('/reservation', resRouter);
app.use('/segment', segRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
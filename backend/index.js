const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const connect = require('./config/db.js');
const PORT = process.env.PORT || 3000;
const {urlencoded} = require('express');


connect()
const app = express();

app.use(bodyParser.json());
app.use(urlencoded({extended: false}));

app.get('/', require('./routes/routes.js'));

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
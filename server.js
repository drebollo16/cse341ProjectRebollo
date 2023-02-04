const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const connectDB = require('./DB/connection');




const port = process.env.PORT || 3000;
const app = express();

connectDB();

app
//added swagger
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));



//app.use('/', require('./routes'))
//connectDB();

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
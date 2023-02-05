const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./DB/connection');


const port = process.env.PORT || 3000;
const app = express();

connectDB();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
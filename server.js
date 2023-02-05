const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./DB/connection');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 3000;
const app = express();

connectDB();

app

    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(cors())
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
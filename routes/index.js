const express = require('express');
const routes = express.Router();
const contactController = require('../controllers/contacts');

/*
constswaggerAutogen = require('swagger-autogen');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
*/
routes.get('/', (req, res) => {
    res.send('CSE 341 - Project');
});



//routes.get('/contacts');
routes.use('/', require('./swagger'));
routes.use('/contacts', require('./contacts'));

/****************added for doc */
routes.use(
    '/',
    (docData = (req, res) => {
        let docData = {
            documentationURL: '',
        };
        res.send(docData);
    })
);

//added to get contacts by ID
//routes.get('/: id ', contactController.getOneId);

module.exports = routes;
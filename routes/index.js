const express = require('express');
const routes = express.Router();
const contactController = require('../controllers/list');


routes.get('/', (req, res) => {
    res.send('CSE 341 - Project');
});

routes.use('/', require('./swagger'));
routes.use('/list', require('./list'));

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


module.exports = routes;
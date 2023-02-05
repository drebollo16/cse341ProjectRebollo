const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts Description',
    },
    host: '/cserebolloproject.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);
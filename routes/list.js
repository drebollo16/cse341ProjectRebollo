const express = require('express');
const router = express.Router();

const listRoute = require('../controllers/list');

//get all contacts 
router.get('/', listRoute.getallList);

//get user info by id
router.get('/:id', listRoute.getOneId);
//added



module.exports = router;
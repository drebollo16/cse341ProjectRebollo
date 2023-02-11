const express = require('express');
const router = express.Router();

const listRoute = require('../controllers/list');

//get list all
router.get('/', listRoute.getallList);

//get user info by id
router.get('/:id', listRoute.getOneId);

//post create user list
router.post('/', listRoute.createList);


module.exports = router;
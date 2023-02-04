const mongoose = require('mongoose');
const modelUser = require('../DB/User');


const getAllContacts = async(req, res) => {
    const result = await modelUser.find();
    res.json(result);
}

async function getOneId(req, res) {
    const result1 = await modelUser.findById(req.params.id);
    res.json(result1);
}

module.exports = { getAllContacts, getOneId };
const mongoose = require('mongoose');
const modelUser = require('../DB/User');


const getallList = async(req, res) => {
    const result = await modelUser.find();
    res.json(result);
}

async function getOneId(req, res) {
    const result1 = await modelUser.findById(req.params.id);
    res.json(result1);
}


/**Need to add edit delete list */

async function createList(req, res) {
    const result2 = await modelUser.collection.insertOne();

}
module.exports = { getallList, getOneId };
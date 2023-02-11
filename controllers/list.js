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

//create new list user
const createList = async(req, res) => {
    const newList = {
        fullName: req.body.fullName,
        city: req.body.city,
        state: req.body.state,
        task: req.body.task,
        date: req.body.date,
        listToDo: req.body.listToDo
            //city: state: task: date: listToDo:
    };

    const listCreated = await modelUser.collection.insertOne(newList);
    if (listCreated) {
        res.status(201).json(listCreated || 'sucess');
    } else {

        res.status(500).json(listCreated.error || 'error occurred while creating a new user');
    }
}

/**Need to add edit delete list */


module.exports = { getallList, getOneId, createList };
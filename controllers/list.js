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
    try {
        if (!req.body.newList) {
            res.status(500).json('Can not be empty');
            return;
        } else {

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
            listCreated;
            res.status(201).json(listCreated || 'success');
        }

    } catch (error) {
        res.status(500).json('Somethiing happened while creating new list')
    }
}


/**Need to add edit delete list */
//create new list user
const updateList = async(req, res) => {
        const newList = {
            fullName: req.body.fullName,
            city: req.body.city,
            state: req.body.state,
            task: req.body.task,
            date: req.body.date,
            listToDo: req.body.listToDo
                //city: state: task: date: listToDo:
        };

        const userID = await modelUser.findById(req.params.id);
        const listUpdated = await modelUser.replaceOne(newList, userID);
        if (listUpdated) {
            res.status(204).json(listUpdated || 'success');
        } else {

            res.status(500).json(listCreated.error || 'error occurred while creating a new user');
        }
    }
    //delete user by _id
const deleteUser = async(req, res) => {
    const UserId = await modelUser.findByIdAndDelete(req.params.id);
    const update = await modelUser.deleteOne(UserId);

    if (update.acknowledged) {
        res.status(200).json(update || 'deleted');
    } else {
        res.status(500).json(update.error || 'error happened while deleting user.');
    }

}

module.exports = {
    getallList,
    getOneId,
    createList,
    updateList,
    deleteUser
};
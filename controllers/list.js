const { UnorderedBulkOperation } = require('mongodb');
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


        if (!req.body.fullName) {
            res.status(400).send({ message: 'Required Can not be empty! Enter full name' });
            return;
        }


        if (!req.body.city) {
            res.status(400).send({ message: 'Can not be empty! Enter city!' });
            return;
        }

        if (!req.body.state) {
            res.status(400).send({ message: 'Required! Can not be empty Enter State' });
            return;
        }

        if (!req.body.date) {
            res.status(400).send({ message: 'Required! Can not be empty! Enter DATE!' });
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

    if (!req.body.fullName) {
        res.status(400).send({ message: 'Missing Full Name!' });
        return;
    }


    if (!req.body.city) {
        res.status(400).send({ message: 'Missing city!' });
        return;
    }

    if (!req.body.state) {
        res.status(400).send({ message: 'Missing State' });
        return;
    }

    if (!req.body.date) {
        res.status(400).send({ message: 'Missing DATE!' });
        return;
    }

    const newList = {
        fullName: req.body.fullName,
        city: req.body.city,
        state: req.body.state,
        task: req.body.task,
        date: req.body.date,
        listToDo: req.body.listToDo
            //city: state: task: date: listToDo:
    };


    const id_change = {
        _id:req.body.id
    }

    const result1 = await modelUser.findById(req.params.id);
    const update_user =await modelUser.findByIdAndUpdate(result1, newList);

    //res.json(update_user);
        if (update_user) {
       
        res.status(200).send({ message: 'Successful user updated!' });

    } else {

        res.status(500).json('error occurred while creating a new user');
    }
    
}



//delete user by _id
const deleteUser = async(req, res) => {

    const newList = {
        fullName: req.body.fullName,
        city: req.body.city,
        state: req.body.state,
        task: req.body.task,
        date: req.body.date,
        listToDo: req.body.listToDo
            //city: state: task: date: listToDo:
    };
     
    const idelete = await modelUser.findById(req.params.id);
    const update_user = await modelUser.findByIdAndRemove(idelete);
    update_user;
    if (update_user) {
        res.status(204).json({message: 'deleted'});
    } else {
        res.status(500).json({message: 'error happened while deleting user.'});
    }
}

module.exports = {
    getallList,
    getOneId,
    createList,
    updateList,
    deleteUser
};
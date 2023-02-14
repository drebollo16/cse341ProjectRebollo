const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
    task: {
        type: String
    },
    date: {
        type: Date,
        required: true,
        default: new Date(),

    },
    listToDo: {
        type: String
    },
    versionKey: false
});



// names your model in mongodb exports it
module.exports = User = mongoose.model('user', schema);
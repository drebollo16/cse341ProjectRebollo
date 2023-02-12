const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    fullName: {
        type: String
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
        type: Date
    },
    listToDo: {
        type: String
    },
    versionKey: false
});




module.exports = User = mongoose.model('Project', schema);
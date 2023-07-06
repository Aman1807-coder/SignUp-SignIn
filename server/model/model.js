const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/personDB', {useNewUrlParser : true});

const formSchema = new mongoose.Schema({
    name : String,
    contact : String,
    email : String,
    password : String
});

module.exports = mongoose.model('Person', formSchema );

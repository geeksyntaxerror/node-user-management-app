const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    age : Number,
    place : String,
},{
    timestamps : true
});


module.exports = mongoose.model('User',userSchema);
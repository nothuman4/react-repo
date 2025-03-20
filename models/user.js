//this file is for describing user schema

const mongoose =require('mongoose');
const userschema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number,
})

const userModel = mongoose.model('user',userschema);
module.exports = userModel;

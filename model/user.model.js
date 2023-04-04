const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    noOfTravellers:{
        type:Number,
        required:true
    },
    budget:{
        type:Number,
        required:true
    }
})

const UserModel=mongoose.model('users',Schema);

module.exports={UserModel}

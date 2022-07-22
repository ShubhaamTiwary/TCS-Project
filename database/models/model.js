// Defining Schema for the database
const mongoose =require('mongoose');

const Data=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    count:{
        type: Number,
        required:false
    }
});

const Labs=mongoose.model('Labs',Data);
module.exports=Labs;
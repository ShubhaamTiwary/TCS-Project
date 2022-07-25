// Defining Schema for the database
const mongoose =require('mongoose');

const Data2=new mongoose.Schema({
    enrollment:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    }
});

const Student=mongoose.model('Student',Data2);
module.exports=Student;
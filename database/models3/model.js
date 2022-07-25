// Defining Schema for the database
const mongoose =require('mongoose');

const Data3=new mongoose.Schema({
    enrollment:{
        type: String,
        required:true
    },
    app:{
        type: String,
        required: true
    }
});

const Lab1=mongoose.model('Lab1',Data3);
module.exports=Lab1;
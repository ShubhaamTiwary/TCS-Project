// Defining Schema for the database
const mongoose =require('mongoose');

const Data4=new mongoose.Schema({
    enrollment:{
        type: String,
        required:true
    },
    app:{
        type: String,
        required: true
    }
});

const Lab2=mongoose.model('Lab2',Data4);
module.exports=Lab2;
// Defining Schema for the database
const mongoose =require('mongoose');

const Data5=new mongoose.Schema({
    enrollment:{
        type: String,
        required:true
    },
    app:{
        type: String,
        required: true
    }
});

const Lab3=mongoose.model('Lab3',Data5);
module.exports=Lab3;
// COnnecting with DB
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/employee');

const db5=mongoose.connection;

db5.on('error', console.error.bind(console,'error connection DB'));

db5.once('open',function(){
    console.log('Succesfully Connected to Lab-3 DB')
});
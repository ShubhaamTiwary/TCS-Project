// COnnecting with DB
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/employee');

const db4=mongoose.connection;

db4.on('error', console.error.bind(console,'error connection DB'));

db4.once('open',function(){
    console.log('Succesfully Connected to Lab-2 DB')
});
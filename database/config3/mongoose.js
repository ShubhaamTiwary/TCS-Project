// COnnecting with DB
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/employee');

const db3=mongoose.connection;

db3.on('error', console.error.bind(console,'error connection DB'));

db3.once('open',function(){
    console.log('Succesfully Connected to Lab-1 DB')
});
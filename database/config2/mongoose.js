// COnnecting with DB
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/employee');

const db2=mongoose.connection;

db2.on('error', console.error.bind(console,'error connection DB'));

db2.once('open',function(){
    console.log('Succesfully Connected to Students DB')
});
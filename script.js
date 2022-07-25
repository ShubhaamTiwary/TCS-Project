const express =require('express');
const port=8000;
const path=require('path');
const app=express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'pages'));
app.use(express.urlencoded());
app.use(express.static('style'));

// Requiring emplyee DB
const db=require('./database/config/mongoose');
const Labs=require('./database/models/model');

// Requiring Student DB
const db2=require('./database/config2/mongoose');
const Student=require('./database/models2/model');

// Requiring Lab-1 DB
const db3=require('./database/config3/mongoose');
const Lab1=require('./database/models3/model');

// Requiring Lab-2 DB
const db4=require('./database/config4/mongoose');
const Lab2=require('./database/models4/model');

// Requiring Lab-3 DB
const db5=require('./database/config5/mongoose');
const Lab3=require('./database/models5/model');

var Global_count=0;
var success=0;
var login=0;
var student_login=0;
var id=0;

var LAB="";


// All get commands
app.get('/',function(req,res){ 
    return res.render('home');
});

app.get('/Matlab',function(req,res){ 
    if(LAB=="Lab1"){
        Lab1.create({
            enrollment:id,
            app:'Matlab',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab2"){
        Lab2.create({
            enrollment:id,
            app:'Matlab',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab3"){
        Lab3.create({
            enrollment:id,
            app:'Matlab',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    return res.render('student_exit');
});app.get('/idea',function(req,res){ 
    if(LAB=="Lab1"){
        Lab1.create({
            enrollment:id,
            app:'Intellij IDEA',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab2"){
        Lab2.create({
            enrollment:id,
            app:'Intellij IDEA',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab3"){
        Lab3.create({
            enrollment:id,
            app:'Intellij IDEA',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    return res.render('student_exit');
});app.get('/ms',function(req,res){ 
    if(LAB=="Lab1"){
        Lab1.create({
            enrollment:id,
            app:'MS Office Suit',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab2"){
        Lab2.create({
            enrollment:id,
            app:'MS Office Suit',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab3"){
        Lab3.create({
            enrollment:id,
            app:'MS Office Suit',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    return res.render('student_exit');
});app.get('/Pycharm',function(req,res){ 
    if(LAB=="Lab1"){
        Lab1.create({
            enrollment:id,
            app:'PyCharm',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab2"){
        Lab2.create({
            enrollment:id,
            app:'PyCharm',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab3"){
        Lab3.create({
            enrollment:id,
            app:'PyCharm',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    return res.render('student_exit');
});app.get('/vs',function(req,res){ 
    if(LAB=="Lab1"){
        Lab1.create({
            enrollment:id,
            app:'Visual Studio 2022',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab2"){
        Lab2.create({
            enrollment:id,
            app:'Visual Studio 2022',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab3"){
        Lab3.create({
            enrollment:id,
            app:'Visual Studio 2022',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    return res.render('student_exit');
});app.get('/Figma',function(req,res){ 
    if(LAB=="Lab1"){
        Lab1.create({
            enrollment:id,
            app:'Figma',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab2"){
        Lab2.create({
            enrollment:id,
            app:'Figma',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    if(LAB=="Lab3"){
        Lab3.create({
            enrollment:id,
            app:'Figma',
        },function(err,newEmployee){
            if(err) {
                console.log("Error in creating an entry in script.js");
                return;
            }
            return ;
        });        
    }
    return res.render('student_exit');
});




app.get('/student_Lab1',function(req,res){ 
    LAB="Lab1";
    return res.render('selection');
});app.get('/student_Lab2',function(req,res){ 
    LAB="Lab2";
    return res.render('selection');
});app.get('/student_Lab3',function(req,res){ 
    LAB="Lab3";
    return res.render('selection');
});

app.get('/signin',function(req,res){ 
    return res.render('signin',{Login:login});
});

app.get('/signup',function(req,res){ 
    return res.render('signUp',{success:success});
 });

app.get('/student',function(req,res){ 
    return res.render('student',{student_login:student_login});
});

app.get('/student_home',function(req,res){ 
    return res.render('student_home');
});

// All post commands
app.post('/signin',function(req,res){ 
    return res.render('signin',{Login:login});
});


app.post('/signin-validation',function(req,res){ 
    var url='/login-';
    login=0;
    Labs.findOne({name:req.body.name},function(err,data){
        if(err){
            console.log("Error from Fetching the contacts");
            return;
        }
        // console.log(data);
        if(data){
            if(data.password==req.body.password){
                console.log('Correct Password');
                url=url+data.count;
                // console.log(url);
                return res.redirect(url);
                }
                else{
                    login=1;
                    console.log('Incorect Id or Password');
                    return res.redirect('/signin');
                }
            }
            else{
                login=1;
                console.log('Incorect Id or Password');
                return res.redirect('/signin');
            }
        });
    });
    app.post('/student-validation',function(req,res){ 
        student_login=0;
        Student.findOne({enrollment:req.body.name},function(err,data){
            if(err){
                console.log("Error from Fetching the contacts");
                return;
            }
            if(data){
                if(data.password==req.body.password){
                    id=req.body.name;
                    return res.redirect('/student_home');
                    }
                    else{
                        student_login=1;
                        console.log('Incorect Id or Password');
                        return res.redirect('/student');
                    }
                }
                else{
                    student_login=1;
                        console.log('Incorect Id or Password');
                        return res.redirect('/student');
                }
            });
        });

    


app.post('/signup',function(req,res){ 
    return res.render('signUp',{success:success});
});

app.post('/signup-details',function(req,res){ 
    success=0;
    let input_pass=req.body.password;
    let confirm_pass=req.body.confirmpass;
    if(input_pass!=confirm_pass){
        success=1;
        return res.redirect('/signup');
    }
    Labs.create({
        name:req.body.name,
        password:req.body.password,
        count:(Global_count++)
    },function(err,newEmployee){
        if(err) {
            console.log("Error in creating an entry in script.js");
            return;
        }
        // console.log('*****',newEmployee);
        return res.redirect('/signin');
    });
 });

app.listen(port,function(error){
    if(error){
        console.log('Error',error); 
        return;
    }
    console.log('The server is running fine on port number ',port);
});
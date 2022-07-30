const express =require('express');
const port=8000;
const path=require('path');
const app=express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'pages'));
app.use(express.urlencoded());
app.use(express.static('style'));

var Total=0;
var matlab_1=0;var matlab_2=0;var matlab_3=0;
var idea_1=0;var idea_2=0;var idea_3=0;
var ms_1=0;var ms_2=0;var ms_3=0;
var pycharm_1=0;var pycharm_2=0;var pycharm_3=0;
var vs_1=0;var vs_2=0;var vs_3=0;
var figma_1=0;var figma_2=0;var figma_3=0;

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

var Global_count=1;
var success=0;
var login=0;
var student_login=0;
var id=0;
var LAB="";
var Lab_1={};
var Lab_2;
var Lab_3;


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
    return res.render('student_exit',{APP:"Matlab"});
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
    return res.render('student_exit',{APP:"idea"});
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
    return res.render('student_exit',{APP:"ms"});
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
    return res.render('student_exit',{APP:"Pycharm"});
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
    return res.render('student_exit',{APP:"vs"});
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
    return res.render('student_exit',{APP:"Figma"});
});

app.get('/student-exit',function(req,res){
    return res.render('student_exit');
});

app.get('/student_Lab1',function(req,res){ 
    LAB="Lab1";
    return res.render('selection',{LAB:LAB});
});app.get('/student_Lab2',function(req,res){ 
    LAB="Lab2";
    return res.render('selection',{LAB:LAB});
});app.get('/student_Lab3',function(req,res){ 
    LAB="Lab3";
    return res.render('selection',{LAB:LAB});
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

app.get('/login0',function(req,res){ 
    Lab1.find({},function(err,data){
        if(err){
            console.log("Error from Fetching the contacts");
            return;
        }
        // console.log(data);
            if(data){
                Lab2.find({},function(err,data2){
                    if(err){
                        console.log("Error from Fetching the contacts");
                        return;
                    }
                    // console.log(data);
                        if(data2){
                            Lab3.find({},function(err,data3){
                                if(err){
                                    console.log("Error from Fetching the contacts");
                                    return;
                                }
                                // console.log(data);
                                    if(data3){
                                        return res.render('login0',{Total:Total,matlab_1:matlab_1,matlab_2:matlab_2,matlab_3:matlab_3,idea_1:idea_1,idea_2:idea_2,idea_3:idea_3,ms_1:ms_1,ms_2:ms_2,ms_3:ms_3,pycharm_1:pycharm_1,pycharm_2:pycharm_2,pycharm_3:pycharm_3,vs_1:vs_1,vs_2:vs_2,vs_3:vs_3,figma_1:figma_1,figma_2:figma_2,figma_3:figma_3,Lab_1:data,Lab_2:data2,Lab_3:data3});
                                    }
                                });
                        }
                    });
            }
        });
   
});

app.get('/login1',function(req,res){ 
    Lab1.find({},function(err,data){
        if(err){
            console.log("Error from Fetching the contacts");
            return;
        }
        // console.log(data);
            if(data){
                Lab2.find({},function(err,data2){
                    if(err){
                        console.log("Error from Fetching the contacts");
                        return;
                    }
                    // console.log(data);
                        if(data2){
                            Lab3.find({},function(err,data3){
                                if(err){
                                    console.log("Error from Fetching the contacts");
                                    return;
                                }
                                // console.log(data);
                                    if(data3){
                                        return res.render('login1',{Total:Total,matlab_1:matlab_1,matlab_2:matlab_2,matlab_3:matlab_3,idea_1:idea_1,idea_2:idea_2,idea_3:idea_3,ms_1:ms_1,ms_2:ms_2,ms_3:ms_3,pycharm_1:pycharm_1,pycharm_2:pycharm_2,pycharm_3:pycharm_3,vs_1:vs_1,vs_2:vs_2,vs_3:vs_3,figma_1:figma_1,figma_2:figma_2,figma_3:figma_3,Lab_1:data,Lab_2:data2,Lab_3:data3});
                                    }
                                });
                        }
                    });
            }
        });
});
app.get('/login2',function(req,res){ 
    Lab1.find({},function(err,data){
        if(err){
            console.log("Error from Fetching the contacts");
            return;
        }
        // console.log(data);
            if(data){
                Lab2.find({},function(err,data2){
                    if(err){
                        console.log("Error from Fetching the contacts");
                        return;
                    }
                    // console.log(data);
                        if(data2){
                            Lab3.find({},function(err,data3){
                                if(err){
                                    console.log("Error from Fetching the contacts");
                                    return;
                                }
                                // console.log(data);
                                    if(data3){
                                        return res.render('login2',{Total:Total,matlab_1:matlab_1,matlab_2:matlab_2,matlab_3:matlab_3,idea_1:idea_1,idea_2:idea_2,idea_3:idea_3,ms_1:ms_1,ms_2:ms_2,ms_3:ms_3,pycharm_1:pycharm_1,pycharm_2:pycharm_2,pycharm_3:pycharm_3,vs_1:vs_1,vs_2:vs_2,vs_3:vs_3,figma_1:figma_1,figma_2:figma_2,figma_3:figma_3,Lab_1:data,Lab_2:data2,Lab_3:data3});
                                    }
                                });
                        }
                    });
            }
        });
});
app.get('/login3',function(req,res){ 
    Lab1.find({},function(err,data){
        if(err){
            console.log("Error from Fetching the contacts");
            return;
        }
        // console.log(data);
            if(data){
                Lab2.find({},function(err,data2){
                    if(err){
                        console.log("Error from Fetching the contacts");
                        return;
                    }
                    // console.log(data);
                        if(data2){
                            Lab3.find({},function(err,data3){
                                if(err){
                                    console.log("Error from Fetching the contacts");
                                    return;
                                }
                                // console.log(data);
                                    if(data3){
                                        return res.render('login3',{Total:Total,matlab_1:matlab_1,matlab_2:matlab_2,matlab_3:matlab_3,idea_1:idea_1,idea_2:idea_2,idea_3:idea_3,ms_1:ms_1,ms_2:ms_2,ms_3:ms_3,pycharm_1:pycharm_1,pycharm_2:pycharm_2,pycharm_3:pycharm_3,vs_1:vs_1,vs_2:vs_2,vs_3:vs_3,figma_1:figma_1,figma_2:figma_2,figma_3:figma_3,Lab_1:data,Lab_2:data2,Lab_3:data3});
                                    }
                                });
                        }
                    });
            }
        });
});

app.post('/signin-validation',function(req,res){ 
    var url='/login';
    login=0;
    
        Lab2.find({},function(err,data){
            if(err){
                console.log("Error from Fetching the contacts");
                return;
            }
            // console.log(data);
                if(data){
                Lab_2=data;
                }
            });
        Lab3.find({},function(err,data){
            if(err){
                console.log("Error from Fetching the contacts");
                return;
            }
            // console.log(data);
                if(data){
                Lab_3=data;
                }
            });
        Lab1.findOne({},function(err,data){
            if(err){
                console.log("Error from Fetching the contacts");
                return;
            }
            // console.log(data);
                if(data){
                Lab_1=data;
                }
            });
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
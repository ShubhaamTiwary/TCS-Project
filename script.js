const express =require('express');
const port=8000;
const path=require('path');
const app=express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'pages'));
app.use(express.urlencoded());
app.use(express.static('style'));

// Requiring DB
const db=require('./database/config/mongoose');
const Labs=require('./database/models/model');

var Global_count=0;
var success=0;
var username=0;
// All get commands
app.get('/',function(req,res){ 
    return res.render('home');
});

app.get('/signin',function(req,res){ 
    return res.render('signin');
});

app.get('/signup',function(req,res){ 
    return res.render('signUp',{success:success});
 });

app.get('/student',function(req,res){ 
    return res.render('student');

});


// All post commands
app.post('/signin',function(req,res){ 
    return res.render('signin')
});

app.post('/signin-validation',function(req,res){ 
    var url='/login-';
    
    Labs.findOne({name:req.body.name},function(err,data){
        if(err){
            console.log("Error from Fetching the contacts");
            return;
        }
        console.log(data);
        if(data){
            if(data.password==req.body.password){
                console.log('Correct Password');
                url=url+data.count;
                console.log(url);
                return res.redirect(url);
                }
                else{
                    console.log('Incorect Id or Password');
                }
            }
            else{
                console.log('Something is wrong');
            }
        });
    });

    


app.post('/signup',function(req,res){ 
    return res.render('signUp',{success:success,username:username});
});

app.post('/signup-details',function(req,res){ 
    success=0;
    let input_pass=req.body.password;
    // Labs.findOne({name:req.body.name},function(err,data){
    //     if(err){
    //         console.log("Error on line 72");
    //         return;
    //     }
    //     if(data){
    //         username=1;
    //         return res.redirect('/signup');
    //     }
    // });
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
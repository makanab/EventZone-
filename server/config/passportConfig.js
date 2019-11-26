const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
require('../models/user.model');

const User = mongoose.model('User');

passport.use(new localStrategy(
    {usernameField:'email'},
    (username,password,done)=>{
        User.findOne({email:username},(err,user)=>{
            if(err){
                return done(err);
            }
            // unknow user 
            else if(!user){
                return done(null ,false ,{message:'User dose not exist'});
            }
            // wrong password
            else if(!user.verfiyPassword(password)){
                return done(null ,false ,{message:'Wrong password'});
            }
            
            //successful auth
            else{
                return done(null , user);

            }
            

        });


}));


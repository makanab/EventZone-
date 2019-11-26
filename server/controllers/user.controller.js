const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('../models/user.model');
const passport = require('passport');
const _ =require('lodash');

// import mongoose model 
const User = mongoose.model('User');

// register user 

module.exports.register =(req,res,next)=>{
    let newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password,10);
    newUser.save((err,user)=>{
        if(err){
            res.status(500).send({message:err});
    
        } else{
        hash_password = undefined;
         res.status(200).json(user);
         next();
        }

    });
}

// user authentication 
module.exports.authentication = (req,res,next)=>{
   
    // call passport auth 
    passport.authenticate('local',(err,user,info)=>{
        //passport auth err
        if(err){
            res.status(400).json(err);
        }
        // registerd user 
        else if(user){
            res.status(200).json({token:user.generateJwt()});
        
        } 
        // unknown user and wrong password 
        else{
            res.status(400).json(info);
        }

    })(req,res);

    
}


// user profile 

module.exports.useProfile =(req,res,next)=>{
    User.findOne({_id:req._id},(err,user)=>{
      if(!user){
          res.status(401).send({ status:false , message:'Use record not found'});
      }else{
          res.status(200).json({status:true ,user:_.pick(user,['fullName','email'])})
      }
    });
}
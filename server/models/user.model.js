const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcryptjs');

// create db schema 
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    hash_password:{
        type:String,
        required:true
    },
    createdOn:{
        type:Date,
        default:Date.now
    }


});

// verfiy password 

userSchema.methods.verfiyPassword = function(password){
    return bcrypt.compareSync(password,this.hash_password);
};

// generate jwt 

userSchema.methods.generateJwt = function(){
    return jwt.sign(
        {_id:this._id},
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXP
        }
        
        );
};

// name the model

module.exports = mongoose .model('User',userSchema);

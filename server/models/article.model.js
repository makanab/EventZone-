const mongoose = require('mongoose');
 
// create schema 

const Schema = mongoose.Schema;

const articleSchema =  new Schema({
    articleName:{
        type:String,
        require:true

    },
    description:{
        type:String,
        require:true
    },
    createdOn:{
        type:Date
    },
    createdOn:{
        type:Date,
        default:Date.now
    }

});

// name the module 

mongoose.model('Article',articleSchema);
const mongoose = require('mongoose');
 
// create schema 

const Schema = mongoose.Schema;

const eventSchema =  new Schema({
    eventName:{
        type:String,
        require:true

    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:Date
    },
    createdOn:{
        type:Date,
        default:Date.now
    }

});

// name the module 

mongoose.model('Event', eventSchema);
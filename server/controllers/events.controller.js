const mongoose = require('mongoose');
require('../models/events.model');


// controllers 
const Event = mongoose.model('Event');
// create new event 

module.exports.newEvent = (req,res,next)=>{
    let newEvent = new Event(req.body);
    newEvent.save((err,event)=>{
        if(err){
            res.status(500).send({message:err});
        }else{
            res.status(200).json(event);
        }
    });
}

// update
module.exports.updateEvent = (req,res,next)=>{
    Event.findByIdAndUpdate(req.params.id,{$set:req.body},(err,event)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send({message:'Event Updated'});
        }

    })

}

//delete 
module.exports.deleteEvent = (req,res,next)=>{
    Event.findByIdAndRemove(req.params.id ,(err,event)=>{
        if(!event){
            res.status(401).send({message:'Event not Found'});
        }
        else if(!err){
            res.status(500).send(err);
        }else{
            res.status(200).sedn({message:'Deleted successfuly!'})
        }
    })
    
}


// general events 

//special events 


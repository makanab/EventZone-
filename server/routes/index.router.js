const express = require('express');
const router = express.Router();

// import Controllers 
const userHandler = require('../controllers/user.controller');
const eventHandler = require('../controllers/events.controller');

// jwt decoder
const jwtHelper = require('../config/jwtHelper'); 


// user routes 
router.post('/register',userHandler.register);
router.post('/auth',userHandler.authentication);
router.get('/profile' , jwtHelper.verfiyJwtToken , userHandler.useProfile);

//events routes 
router.post('/addEvent',eventHandler.newEvent);
router.put('/update/:id',eventHandler.updateEvent);
router.delete('/delete/:id' , eventHandler.deleteEvent);
module.exports = router;

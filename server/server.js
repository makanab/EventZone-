require('./config/config');
require('./models/db');
require('./config/passportConfig');


const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const rtsIndex = require('./routes/index.router');
const cros = require('cors');

// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cros());
app.use('/api' , rtsIndex);




// start server 
app.listen(process.env.PORT,err=>{
if(!err){

console.log('server started at ' + process.env.PORT);

}    
});
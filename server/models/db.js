const  mongoose = require('mongoose');

//optional settings 
const options = {
    poolSize:10,
    reconnectTries:Number.MAX_VALUE,
    useNewUrlParser:true,
    useUnifiedTopology:true
}

//create connection
mongoose.connect(process.env.MONGODB_URL,options,(err)=>{
if(!err){
    console.log('mongodb connected');
}else{
    throw err;
}
});


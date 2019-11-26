const jwt = require('jsonwebtoken');

module.exports.verfiyJwtToken =(req,res,next)=>{
    var token;
    if(req.headers.authorization){
        token = req.headers.authorization.split(' ')[1];
        if(!token){
            res.status(401).send({message:'NO token provided'});
        }
        else {
            jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
                if(err){
                    res.status(500).send({auth:false , message:'Authentication failed '});

                }else{
                    req._id = decode._id;
                    next();



                }
            });
        }

    }
}
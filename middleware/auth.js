const jwt= require('jsonwebtoken');
const auth=async(req,res,next)=>{
    console.log('loged in');
    console.log(req.headers);
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) res.status(401).send({err:'no token duuuud'});
        const user = await jwt.verify(token, 'monitor cat');
        if (!user) res.status(401).send({err:'unauthorized'});
        console.log('user verified');
        next()
    }catch(err){
        res.status(401).send({err:'unauthorized 2'})
    }


    next();
}
module.exports= auth
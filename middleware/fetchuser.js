const jwt = require('jsonwebtoken');
const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const authHeader=req.headers.authorization
    if(!authHeader||!authHeader.startsWith('Bearer')){
        next('Auth Failed')
    }
    const token=authHeader.split(' ')[1]
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}
module.exports=fetchuser;
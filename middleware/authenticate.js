//we have to check whether user is valid or not by verifying JWT tokens

const jwt = require("jsonwebtoken");
const User = require("../modal/userSchema");



const Authenticate = async (req, res, next ) => {
    try{

        const token = req.cookies.jwttoken;
        console.log("token in authentcate middleware -- token : "+token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log("verify token : " + verifyToken);

        const rootUser = await User.findOne({ 
            _id: verifyToken._id, 
            "tokens.token": token 
        });
        console.log("rootuse is : ");
        console.log(rootUser);

        if(!rootUser) {
            console.log("user not found in authenticate");
            throw new Error('User not found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        console.log("no error found in authenticate.jss");

        next();

    } catch (err) {
        console.log(err);
        res.status(401).send('Unauthorized : No token provided error');
        res.status(401).send(err + "Unauthoriized");
        
    }
}

module.exports = Authenticate;
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
require('../db/conn');
const User = require("../modal/userSchema");  //collection data

//USING ASYNC-AWAIT
router.post('/register', async (req, res) => {

    const { name, email, phone, age, password, cpassword } = req.body;     //object destructuring
    console.log(name);
    console.log(phone);
    console.log(age);

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "please fill the required details" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "User email already exist" });
        }
        if (password != cpassword) {
            return res.status(422).json({ error: "passwords doesnt matched" });
        }

        const user = new User({ name, email, phone, age, password, cpassword });   //stored as {name:name, email:email} creating newUser

        const isRegistered = await user.save();

        if (isRegistered) {
            res.status(201).json({ message: "user registeration completed" });
        } else {
            res.status(500).json({ error: "registeration failed" })
        }

    } catch (err) {
        console.log("Registration failed");
        console.log(err);
    }

})


//for login we generated a token and stored that in cookie

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({ message:"awesome" });

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Plz filled the data" });
        }

        const userLogin = await User.findOne({ email: email });  //if user found userLogin will contain the whole document || object


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);       //login password validation

            //generating JWT token..after password match we stored cookie
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 2589000000),
                httpOnly: true
            });

            if (!isMatch)
                res.status(400).json({ error: "Invalid credentials" });
            else
                res.status(200).json({ message: "User logged in successfully" });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }

    } catch (err) {
        console.log("login failed");
        console.log(err);
    }
});

//ABOUT ME PAGE ...we are  using 'authenticate' middleware to verify the user by using jwttokens
router.get('/about', authenticate, (req, res) => {
    // console.log("Hello my about page")
    res.send(req.rootUser);
});

//this endpoint is created to fetch data for contact page
router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.post('/contact', authenticate, async (req, res) => {

    try {
        const { name, email, phone, message } = req.body;     //object destructuring

        if (!name || !email || !phone || !message) {
            console.log("contact form fields empty")
            return res.status(422).json({ error: "please fill the contact form" });
        }

        const userContact = await User.findOne({ _id:req.userID });    //userID coming from middleware

        if (userContact) {
            const userMessage = await userContact.addMessage( name, email, phone, message );

            await userContact.save();

            res.status(201).json({message:"Message section added to database Successfully"})
        }

    } catch (err) {
        console.log(err);
    }
});

//LOGOUT page
router.get('/logout', authenticate, (req, res) => {
    console.log("Hello my logout page");
    res.clearCookie("jwttoken", {path: '/' });
    console.log("user logged out");
    res.status(200).send("user logout");
});




module.exports = router;











//USING PROMISEs
// router.post('/register', (req, res) => {

//     const {name, email, phone, age, password, cpassword} = req.body;     //object destructuring

//     if(!name || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error: "please fill the required details"});
//     }

//     User.findOne({ email: email })
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "User email already exist"});
//         }

//         const user = new User({name, email, phone, age, password, cpassword});   //stored as {name:name, email:email}
//         user.save().then(() => {
//             res.status(201).json({message:"user registeration completed"});
//         }).catch((err) => res.status(500).json({ error: "registeration failed" }));

//     }).catch(err => { console.log(err); } );

// })
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

//SCHEMA CREATION
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    messages: [
        {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})


//we are hashing the password
userSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

//generating JWT token
userSchema.methods.generateAuthToken = async function () {        //using normal fn bcz this keyword doesnt work with fat Arrow fn
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err){
        console.log(err);
    }
}

//store the messages
userSchema.methods.addMessage = async function ( name, email, phone, message ) {
    try {
        this.messages = this.messages.concat({ name, email, phone, message });
        await this.save();
        return this.message;
    } catch (err) {
        console.log(err);
    }
}

//Connecting schema with the collection
const User = mongoose.model('USER', userSchema);

module.exports = User;
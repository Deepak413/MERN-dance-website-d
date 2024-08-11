const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
// const cors = require("cors");

// const corsOptions = {
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow cookies and credentials
//     optionsSuccessStatus: 204
// };

// app.use(cors(corsOptions));
const cors = require('cors');
app.use(cors({
  origin: 'https://justdancef.onrender.com', // The frontend URL
  credentials: true
}));


//CONNECT TO MONGODB ATLAS

dotenv.config({ path: './config.env' });
require('./db/conn');
// const User = require('./modal/userSchema');

//Use to convert the upcoming json data into object
app.use(express.json());
app.use(cookieParser());

//To link the router files to make our routes easy
app.use(require('./router/auth'));


const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV == "production") {
    const path = require('path');

    app.get('/', (req,res)=>{
        app.use(express.static(path.resolve(__dirname, 'client', 'build')));
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`server is successfully running at port no. ${PORT} `);
})

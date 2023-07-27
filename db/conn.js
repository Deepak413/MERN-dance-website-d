const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    // useNewUrlParser:true,
    // useCreateInbox:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection successful with DB");
}).catch((err) => {
    console.log(`No connection with DB`);
});
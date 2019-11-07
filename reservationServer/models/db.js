const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/booking";
const connect = mongoose.connect(url);
connect.then(db => 
    {console.log("connect correctly");
    });

module.exports= mongoose.Connection;
require("dotenv").config(); 

const mongoose = require('mongoose');

console.log("URI:", process.env.MONGO_URL);

const connect_db=async()=>{
   await mongoose.connect(process.env.Mongo_URL)
  .then(() => console.log("✅ MongoDB Connected Successfully"));
}

module.exports=connect_db;
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./Routes/userRoute'); 
app.use(express.json()); //allow send and receive json data
app.use(cors());
app.use("/api/users",userRoute);
//CRUD
app.get("/", (req,res) => {
    res.send("Welcome our chat app API...");
    console.log("recieved");
});


const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req,res)=>{
    console.log(`Server Running on port ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB connection established");
}).catch((error)=>{console.log("Connection failed ",error.message);})
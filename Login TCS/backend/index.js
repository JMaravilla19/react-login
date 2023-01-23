/*
* 
Create Mongo Database: use tcsMiniProject

Insert collection in database tcsMiniProject:
    db.createCollection(users)

Insert data in collection users: 
db.users.insertOne({
employeeId: "2568955",
userName: "Juanillo",
email: "juanillo@gmail.com",
password: "asdgasdgasdasda"
})
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const bcrypt = require("bcryptjs");

const port = 3000;
app.use(express.json());
app.use(cors());

// DB SCHEMA and MODEL
const userSchema = new mongoose.Schema({
    employeeId: {type: Number, unique: true},
    userName: String,
    email: {type: String, unique: true},
    password: String,
});
const user = mongoose.model("users", userSchema);

const dbConnection = async ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/tcsMiniProject");

    const data = await user.find()
    console.log(data);
}

dbConnection();

app.get("/", (req, res)=>{
    res.send("Working fine bro")
})



//Send form data RegisterForm.jsx file.
app.post("/register", async (req, res) =>{
    const  {employeeId, userName, email, password} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10)

    try{

        const insertedUserEmail = await user.findOne({email})
        const insertedUserId = await user.findOne({employeeId})

        if(insertedUserEmail || insertedUserId){
           return res.send({error: "User has an account already, try to login."})
        }
         await user.create({
            employeeId,
            userName,
            email,
            password: encryptedPassword
         })

        res.send({status: "Ok"})
    }catch(error){
        res.send({status: "Error"})
    }
})

app.listen(port);


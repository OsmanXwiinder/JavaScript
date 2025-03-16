const express = require('express')
const jwt = require('jsonwebtoken') // jwt
const jwtpassword = "osman@5954" // jwt password
const mongoose =  require('mongoose') // mongoose
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://osmansaifi30:sUzhQhe3svHRvwc@cluster0.tze6j.mongodb.net/USER_APP');

// this is one my users Schema or model //
const users = mongoose.model('users',({name:"String",email:"String",password:"String"}));

app.post('/signup',async (req,res) => {
    const username = req.body.username
    const name = req.body.name
    const password = req.body.password
        
    // checking users already exist in Data base
    const existingUser = await users.findOne({email:username})
    if(existingUser){
        return res.status(403).json({error:"User Already    "}) 
    }
    const newUser = new users({
        name:name,
        email: username, 
        password:password
    })  

    newUser.save().then(() => console.log("saved"))

    res.status(200).json({"msg":"User Created Successfully"})
})





const port = 5001;
app.listen(port,() => console.log(`Your Server started On ${port}`))
const express = require('express');
const jwt = require('jsonwebtoken');
const jwtpassword = "123456"
const app = express();

const ALL_USERS = [
    {
      "username": "john.doe@example.com",
      "password": "securePass123",
      "name": "John Doe"
    },
    {
      "username": "jane.smith@example.com",
      "password": "Jane@2024",
      "name": "Jane Smith"
    },
    {
      "username": "mike.lee@example.com",
      "password": "MikeLee#99",
      "name": "Mike Lee"
    },
    {
      "username": "emma.wilson@example.com",
      "password": "EmmaPass456",
      "name": "Emma Wilson"
    },
    {
      "username": "david.brown@example.com",
      "password": "David#789",
      "name": "David Brown"
    }
  ]
  function userExists(username,password,next){
    //write a logic to return true or false
    // in All_users Array
    if(username === ALL_USERS[username] && password === ALL_USERS[password]){
        return true
    }else{
        return false
    }
    next()

  }

app.use(express.json()) 

app.post('/SignIn', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    if(!userExists(username,password)){
        res.status(403).json({msg:"user Does not Exist"})
    }
    // creating a token 

    var token = jwt.sign({username:username}, "securePass123");
    return res.json({
        token,
    })

})

app.get('/users', (req,res) => {
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token,jwtpassword);
        const username = decode.username
        // return a list os users other than this username
    }catch(err){
        return res.status(403).json({msg:"Invalid Token"})
    }
})




const port = 3000;
app.listen(port,() => console.log(`Server started in port - ${port}`))    

const express = require('express');
const jwt = require('jsonwebtoken');

const jwtpassword = "123456"
const app = express();
app.use(express.json()) 
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
    
    for(let i=0; i<ALL_USERS.length; i++){
      if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
        return true
      }
    }
     return false 
  }


  // app.use(userExists)

app.post('/SignIn', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(username) //
    console.log(password)

    if(!userExists(username,password)){
      return res.status(403).json({msg:"user Does not Exist"})  
    }
    // creating a token 

    var token = jwt.sign({username: username}, jwtpassword);
    return res.json({
        token,
    })

})

app.get('/users', (req,res) => {
    const token = req.headers.authorization; 

    if(!token) {
      return res.status(401).json({ msg: "No token provided" });
  }
    try{
         const decode = jwt.verify(token,jwtpassword);
        const username = decode.username
        // return a list os users other than this username
       
           let loggedUsers = ALL_USERS.filter(user => user.username !== username )
           return res.status(200).json(loggedUsers)
          
    }catch(err){
        return res.status(403).json({msg:"Invalid Token"})  
    }
})

app.use((err,req,res,next) => {
  res.json("Error")
})

const port = 3003;
app.listen(port,() => console.log(`Server started in port - ${port}`))    
const { error } = require('console')
const express = require('express')
const app = express();

let ErrorCount = 0;
function errCount(err,req,res,next) {
    ErrorCount++
    next(err)
}

app.use(express.json())

app.get('/user',(req,res) => {  
     throw new Error("User not Found");
    res.status(200).json({name:"Jhon"})
})

app.post('/user',(req,res) => {
    res.status(200).json({msg:"Created Dummy User"})
})

app.post('/erroCount',(req,res) => {
    res.status(200).json({ErrorCount})
})
app.use(errCount)
const port = 3000
app.listen(port)
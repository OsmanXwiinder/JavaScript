const express = require('express')
const app = express()


app.get('/result',(req,res) =>{
    const CurrentDate = new Date()
  const re =  CurrentDate.getMilliseconds(console.log("milisecond to complete =>"),res.json({
        msg:"Your req approved"
    }))
    console.log(re)
})


const port = 3000;
app.listen(port,() => console.log(`server started on => ${port}`))
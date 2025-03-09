const zod = require('zod')
const express = require('express');
const app = express();

function newValidate(obj){
    const objSchema = zod.object({
        email:zod.string(),
        password: zod.string().min(8),
    
    })
    const response1 = objSchema.safeParse(obj);
    console.log(response1)
}


app.use(express.json());

app.post('/login', (req,res) => {
    
    const response = newValidate(req.body)
    
    if(!response.success){
        res.json({
            msg:"You intpu are not valid"
        })
        return
    }else{
        res.send("login")
    }
})

app.use((err,req,res,next) => {
    res.send(err)
})

const port = 3000;
app.listen(port, () => console.log("server started"));
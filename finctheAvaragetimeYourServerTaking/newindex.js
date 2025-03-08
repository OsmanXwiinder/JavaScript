import express from 'express'
const app = express()
import zod from 'zod'

        // structure of the inputes 
const schema = zod.array(zod.number); // input will be array & element 
                                    // of the array will be numbers => [1,2,3,4]
const newschema = zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US")),
    kidneys:zod.array(zod.number())
})
app.use(express.json()) 

app.post('/kidney-checkup', (req,res) =>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({msg:"Invaid iunputs"})
    }else{
        res.send({
            response
        })
    }
    

    // const kidneysLength = kidneys.length
    // res.send(`your kidney length: ${kidneysLength}`)
})
    
app.use((err,req,res,next) => {
    res,json({
        msg:"Sorry something is up with our server"
    })
})

const port = 3000;
app.listen(port,() => console.log(`Your server started on=> ${port}`))
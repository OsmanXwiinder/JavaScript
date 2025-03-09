import express from 'express'
import chalk from 'chalk'

const app = express();



    

function usermiddleWare(req,res,next){

    const username = req.headers.username     

    const password = req.headers.password   
    if(username != "osman" || password != "pass"){   
        res.status(400).json({
            msg:"User does not exits"
        })
        
    }else{
        next()
    }
}


 function KidneyMiddleware(req,res,next){

    const kidneysId = req.query.kidneysId  

    if(kidneysId != 1 && kidneysId != 2){ 
        res.status(400).json({
            msg:"wrong input"
        })
        
    }else{
        next()
    }
 }


 let numberofRequest = 0;
function calculateRequest(req,res,next){
    numberofRequest++
    console.log(numberofRequest)
    next()
}
app.use(express.json()) // convert body content to a json 

app.get('/req',calculateRequest,(req,res) => {

})

app.get('/health-checkup',usermiddleWare,KidneyMiddleware, (req,res) => {
    res.json({msg:"Your heart is healthy"})
})


app.get('/kidney-checkup',usermiddleWare,KidneyMiddleware, (req,res) => {
    res.json({msg:"Your kidney is healthy"})
})


const port = 3000;

app.listen(port, () => console.log(`server started on ${chalk.red.bold(port)}`))
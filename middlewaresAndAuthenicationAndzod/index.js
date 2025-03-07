import express from 'express'
import chalk from 'chalk'

const app = express();

app.use(express.json())

app.get('/health-checkup', (req,res) => {
    
    const username = req.headers.username     
    const password = req.headers.password      
    const kidneysId = req.query.kidneysId     

    if(username != "osman" || password != "pass"){   
        res.status(400).json({
            msg:"User does not exits"
        })
        return
    }
    if(kidneysId != 1 && kidneysId != 2){ 
        res.status(400).json({
            msg:"wrong input"
        })
        return
    }

    res.json({
        msg:"Your Kidneys is fine"
    });
})





const port = 3000;

app.listen(port, () => console.log(`server started on ${chalk.red.bold(port)}`))
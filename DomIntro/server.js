const express = require('express');
const app = express();
const cors = require('cors')





app.use(cors())
app.use(express.json());
app.get('/sum', (req,res) => {
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b);
    
    const ans = a+ b;

    res.status(200).json(ans)

    
})

app.use((err,req,res,next) => {
    res.status(500).json({"err":err})
})



const port = 3000;
app.listen(port,() => console.log("started"))
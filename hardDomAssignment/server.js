const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())
  //S.I. = (P × R × T)/100,
    app.get('/loan', (req,res) => {
        const p = parseInt(req.query.p)
        const r = parseInt(req.query.r);
        const t = parseInt(req.query.t);

        const simpleInterest = (p*r*t) / 100;

        res.status(200).json(simpleInterest)

    })

    app.use((err,req,res,next) => {
           res.status(500).json({err:"Internal server Error"});
    })


const port = 3000;
app.listen(port, () => console.log("server started"))
const express = require('express');
const app = express();


const user = [{
    name: "John",
    kidney: [{
        healthy: false
    },
    {
        healthy: true
    }]
}];

app.use(express.json());  // Middleware to parse JSON


app.get('/', function (req, res) {
    const JohnKidneys = user[0].kidney;
    const NumberOfKidneys = JohnKidneys.length;
    let numberofHelthyKidney = 0;

    for(let i=0; i<JohnKidneys.length; i++){
        if(JohnKidneys[i].healthy){
            numberofHelthyKidney++;
        }
    }
    const unHealthyKidneys = NumberOfKidneys - numberofHelthyKidney;
    res.json(
        {NumberOfKidneys,
        numberofHelthyKidney,
        unHealthyKidneys,}

    )

});

app.post('/',function(req,res){
    
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done"
    })
})

app.put('/',function(req,res){
    for(let i=0; i<user[0].kidney.length; i++){
        user[0].kidney[i].healthy = true
    }
    res.json({})
})
 
app.delete('/',function(req,res){
    if(isThereAtleasteoneUnhealthyKidney()){
        const newKidneys = []
        for(let i=0; i<user[0].kidney.length; i++){
            if(user[0].kidney[i].healthy) {newKidneys.push({healthy:true})}
        }
        user[0].kidney = newKidneys;
    res.json({msg:"Done"})
    }else{
        res.status(411).json({
            msg:"You have no bad kidney"
        })
    }

    
    

})

function isThereAtleasteoneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<user[0].kidney.length; i++){
        if(!user[0].kidney[i].healthy){
            atleastOneUnhealthyKidney = true
        }
    }
    return atleastOneUnhealthyKidney;
}



const port = 3000;
app.listen(port,() => console.log(`server started on port ${port}`));
import express from 'express'
import chalk from 'chalk'
const app = express();

import fs from 'fs'
import { resolve } from 'path';
import { rejects } from 'assert';


/*1. GET /files - Returns a list of files present in `./files/` directory
 Response: 200 OK with an array of file names in JSON format.
 Example: GET http://localhost:3000/files*/

 const files = [{
    file1:"log.txt",
    file2: "log1.txt",
    file3: "log2.txt",
    file4:"log3.txt"
}]


app.get('/files', function(req,res){
    for(let i=0; i<files.length; i++){
        const fileName = files;
        res.status(200).json({fileName})
    }
})


// GET /file/:filename - Returns content of given file by name

function readMe(filename){
    const p = new Promise((resolve, rejects) => {
        fs.readFile(filename, 'utf-8',(err, data) => {
            if(err){
                rejects(err)
            }else{
                resolve(data)
            }
        })
    })
    return p
}

app.get('/files/:filename',function(req,res){
   const filename = req.params.filename
        console.log(filename)
        readMe(filename)
        .then((data) => {
            res.status(200).send(data)
        }).catch((err) => {
            res.status(500).send("Error file not found" + err.message)
        });
    
    
})

app.post('/',function(req,res){
    
})


app.put('/',function(req,res){
    
})




const port = 3000
app.listen(port,() => console.log(`Your Server started on port => ${chalk.red.bold(port)}`));
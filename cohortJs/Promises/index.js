/*

=>filter,reduce,map
=>Promises
=>Classes
=>Async Js

*/


const numbers = [1,2,3,4,5,6];
// filter even numbers

const evenNumbers = numbers.filter(num => num %2 === 0);
console.log(evenNumbers);

// reduce

const sumofNumbers = numbers.reduce((acc,curr) => {
    return acc += curr;
},0);

console.log(sumofNumbers)

const arryoflist = ["osman","rizwan","manzoor",'noor ahmad']

arryoflist.map((name) => {
    
    console.log(name)
})

//Promises

function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(function(){
           resolve('i am done')
        },3000)
    })
    return p;
}

myOwnSetTimeout(3000).then(function(value){
    console.log(value);
})


const fs = require('fs');



function readFileusingPromises(filename){
    let P = new Promise((resolve,rejects) => {
        fs.readFile(filename,'utf-8',(err,data)=>{
            if(err){
                rejects(err)
            }else{
                resolve(data);
            }
        })
    })
    return P
}

readFileusingPromises('log.txt')    .then((data) => {
    console.log(data);
})
.catch((err) => {  // Fix: Proper placement of .catch()
    console.error('Error reading file:', err);
})
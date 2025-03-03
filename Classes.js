
// const dog = [{
//     name: "dog",
//     legCount: 4,
//     speaks: "Bhow bhow"
// }]
// const cat = [{
//     name: "cat",
//     legCount: 4,
//     speaks: "meow meow"
// }]

const { after } = require("node:test");

class Animal{
    
    constructor(name,legCount,speaks){
        this.name = name;
        this.legCount = legCount
        this.speaks = speaks
    }
    speak(){
        console.log("hi there" + this.speaks)
    }
}

let dog = new Animal("dog",4,"Bhow Bhow");

dog.speak()

//Date Class

const CurrentDate = new Date()
console.log("Year: ",CurrentDate.getFullYear())
console.log("Month: ",CurrentDate.getMonth())
console.log("Date: ",CurrentDate.getDate())
console.log("Houre: ",CurrentDate.getHours())
console.log("Minutes: ",CurrentDate.getMinutes())
console.log("Seconds: ",CurrentDate.getSeconds())


CurrentDate.setFullYear(2019)
console.log("After SetFullYear: ",CurrentDate)

CurrentDate.setMonth(7)
console.log("After setMonth :" ,CurrentDate )

CurrentDate.setDate(10)
console.log("After setDate :" ,CurrentDate )

console.log("time in miliseconds since :", CurrentDate.getTime())




function calculateSum(){
    let a =0;
    for(let i=0; i<1000000000; i++){
        a += i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeINml = beforeDate.getTime();

calculateSum()

const afterDate = new Date();
const afterTimeInMl = afterDate.getTime();

console.log("time taken by a function to calculate a sum" , afterTimeInMl - beforeTimeINml)
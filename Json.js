// const { json } = require("body-parser")

const users = '{"name" : "osman", "age":20,"gender":"male"}'

const user = JSON.parse(users)
console.log(user["gender"])

const newuser = {
    name:"harkirat", 
    gender:"male"
}

const finalString = JSON.stringify(newuser)
console.log(finalString)
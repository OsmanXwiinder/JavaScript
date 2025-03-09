import zod, { z } from 'zod';



function validateInput(arr){
    const schema = zod.array(zod.number())
    const response = schema.safeParse(arr)

    console.log(response)
}
validateInput([1,2,3,4])


function newValidate(obj){
    const objSchema = zod.object({
        email:zod.string(),
        password: zod.string().min(8)
    
    })
    const response1 = objSchema.safeParse(obj);
    console.log(response1)
}
newValidate({email:"osmansaifi30@gmail.com",password:"osmansai"})
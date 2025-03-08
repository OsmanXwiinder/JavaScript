import zod, { z } from 'zod';



function validateInput(arr){
    const schema = zod.array(zod.number())
    const response = schema.(arr)

    console.log(response)
}
validateInput([1,2,3,4])
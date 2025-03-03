
// 	const newArray = [];

const { join } = require("path");

// const { log } = require("node:console");

	
// 	for(let i=0; i<input.length; i++){
//         let newValue = input[i] * 2
// 		newArray.push(newValue)
// 	}
// 	console.log(newArray)


    // map solution

    // function transform(i){
    //     return i*2;
    // }

    // const ans = input.map(transform)
    // console.log(ans)

    // const ans1 = input.map((i) => {
    //     return i*2;
    // })
    // console.log(ans1)

    /*create a map function that takes 2 input
    an array and transformation function callback/fn
    and transforms the array into a new one using
    that transformation function*/
    // 
    // function map(input, transformationfunction){
    //     return input.map(transformationfunction)
    // }
    // function transformationfunction(ele){
    //     return ele*2;
    // }
    // const answer = map(input,transformationfunction);
    // console.log("this is a new Array =>",answer)

    // const input = [1,2,3,4,5];

    // // give me a only even values of array in input
    // const newArary = [];
    
    //     for(let i=0; i<input.length; i++){
    //         if(input[i] % 2 === 0)  newArary.push(input[i])
     
    //     }
     
    //     console.log(newArary);
        

        // function filteringFunction(n){
        //     if(n % 2 === 0){
        //         return true
        //     }else{
        //         return false
        //     }
        // }
        // const arr = ['osman', 'omar', 'Jhon'];
        // const ans = arr.filter((n) => {
        //     if(n.startsWith("o")){
        //     return true
        // }else{
        //     return false
        // }});
        // console.log(ans)

        // const arrayy = [1,3,4,5,6,7];
        // const map = (arrayy,fn) =>{
        //     const newArray = []
        //     for(let i=0; i<arrayy.length; i++){
        //         newArray.push(fn(arrayy[i]))
        //     }
        //     return newArray
        // }
        // function fn(n){
        //     return n*2
        // }

        // const ans = map(arrayy,fn); 
        // console.log(ans)
            // replace
            const str = "hello world";
            console.log(str.replace('world' , 'javascript'))


            //split
            const value = "hi my name is osman";
            const word = value.split(" ");

            console.log(word)

            //trim
            const arr = "    osman saifi     ";
            const newarr = arr.trim(" ");
            
            console.log(newarr)

            const oarr = "osmanSaifi";
            console.log(oarr.toLocaleLowerCase())
            console.log(oarr.toUpperCase());

            const narr = ['1','2','3'];
            for(let i=0; i<narr.length; i++){
               const newValue = parseInt(narr[i])
               console.log(newValue)
            }
            
            function pushValue(marr, ele){
                console.log(marr)

                marr.push(ele)
                console.log(marr)

                marr.pop(marr.length -1)
                console.log(marr)

                marr.shift(0)
                console.log(marr)

                marr.unshift(0);
                console.log(marr)
            }
            const marr = [1,2,3]
            const ele = 4;

             pushValue(marr,ele)
            

             const str1 = "osman"
             const str2 = "saifi"

             const newStr = str1.concat(str2)
             console.log(newStr)


             // forEach loop

             const earr = [1,2,3,4,5];

             earr.forEach((i) => {
                console.log(i)
             })

             console.log('A' - 1);
             console.log("tilak" + "100")
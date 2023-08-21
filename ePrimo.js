
// for(var i = 2; i<51;i++){
//     var count = 0
//     for(var j = 1; j <= i;j++){
//         if(i%j === 0){
//             count++}
//         if (count === 2){

//             console.log(i)
//             break

//         }
        
//     }
// }

let primo = true 
for(let i = 2; i < 51; i++) { primo = true 
    for(let j = 2; j < i; j++) 
    { if(i%j === 0) 
        primo = false } 
        if(primo) console.log(i, 'é primo') }
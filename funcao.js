// function soma(ope1 = 0, ope2 = 0) {
//     return ope1 + ope2;
// }

function soma(...params){
    for(let i = 0; i<params.length;i++){
        console.log(params[i])
    }
    resultado = 0
    for(const elemI of params){
        resultado = resultado + elemI
    }
    console.log(resultado)

}


// soma(10,20,30,40)

// let f = function(op1,op2){
//     return op1 + op2    
// }
// console.log(f(5,10))

f = (op1,op2) =>{
    return op1+op2
}

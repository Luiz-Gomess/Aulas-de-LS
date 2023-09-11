// const operando1 = 30 
// const operando2 = 5

// let operador = 'c'
// let res = undefined

// ESTRUTURAS DE DECISÃO

// if(operador === '+'){
//     res = operando1 + operando2;
// }else if(operador === '-'){
//     res = operando1 - operando2
// }else if(operador === '*'){
//     res = operando1 * operando2
// }else if(operador === "/"){
//     res = operando1 / operando2
// }else if(operador === "%"){
//     res = operando1%operando2
// }

// console.log(`O res da ${operador} é ${res}`)

// switch(operador){
//     case '+': res = operando1 + operando2;break;
//     case '-': res = operando1 - operando2;break;
//     case '*': res = operando1 * operando2;break;
//     case '/': res = operando1 / operando2;break;
//     case '%': res = operando1 % operando2;break;
//     default : res = 'Operação não suportada!'
// }

// console.log(res)

// resultado = operando2 + operando1 === 30? "SIM": "NÃO"
// console.log(resultado)



//ESTRUTURA DE REPETIÇÃO

//FOR

// for( let i = 0; i <10; i++){
//     console.log('Valor: ' + (i+1));
// }

//WHILE

// i = 0
// while(i<10){
//     console.log('Valor: '+i);
//     i++
// }

// ePrimo = true

// for(let i = 2; i<51;i++){
//     for(let j=1; i;j++){
//         if ((i%j)===0){
//             ePrimo = false
//             break
//         }
//     }
//     console.log(`${i} é Primo.`)
// }


//ARRAY

// const array = [1,2,'3']

// console.log(array[1] - array[2])

// array.push(5)
// console.log(array)
// array.push(10)
// console.log(array)
// array.push(15)
// console.log(array)
// array.pop(15)
// console.log(array)

//const array = [19, 2, 1, 18, 15, 3, 35, 10,8,80,50,24]
//
//const ordenaMenorMaior = (a, b) => a - b
//
//console.log(array.sort())
//console.log("---------------------")
//console.log(array.sort(ordenaMenorMaior))


//console.log(array.splice(1, 1))
//console.log(array)
//console.log(array.includes(3))
//console.log(array.slice(1,2))

//function multiplicacao(elem) {
//    console.log(elem * 2)
//}

//array.forEach(multiplicacao)

//array.map{
//const arrayDuplicado = array.map(
//    (elem) => elem*2
//    )
//console.log(arrayDuplicado)
//}


//const arrayPar = array.filter(
//    (elem)=> {
//        const isPar = elem %2 === 0;
//        const menorQue50 = (elem<= 50)?true:false;
//
//        return isPar && menorQue50
//    }
//    )
//console.log(arrayPar)
//
//const array2 = [1,2,3,4]
//console.log("--------------------------")
//console.log(array2)
//const somatorio = array2.reduce(
//    (total,valorAtual) => total + valorAtual
//)
//console.log(somatorio)
//
//const somatorioPares = array2.filter(
//    (elem) => elem %2 ===0
//).reduce(
//    (total,valorAtual) => total + valorAtual 
//)
//
//console.log(somatorioPares)



// const array1 = [1,2,3,4,5,6,7,8,9]

// let SomatorioImpares = array1.filter( 
//     ((elem) => elem %2 === 1)
// ).map{
//     const arrayDuplicado = 
//     ((elem)=>elem *2)}
// // .reduce((total,valorAtual) => total * valorAtual )
// console.log(SomatorioImpares)



//OBJETOS 

/*
const pessoa = {
    nome: 'Francisco',
    sobrenome: 'Dantas',
    ehProfessor: true,
    idade: 40,
    email: 'dantas.nobre@ifpb.edu.br',
    obterNomeCompleto: function() {
        return this.nome + " " + this.sobrenome
    }
}

console.log(pessoa.obterNomeCompleto())
console.log("Idade: ",pessoa.idade)
pessoa.nome = 'Luiz'
pessoa.sobrenome = 'Albuquerque'
console.log(pessoa.obterNomeCompleto())

const pessoa2 = {...pessoa, curso: 'Sistemas para Internet'}
pessoa2.nome = 'Maria'
console.log(pessoa2.nome)
console.log(pessoa.nome)
pessoa.curso = 'Engenharia'
console.log(pessoa.curso)
console.log(pessoa2.curso)
*/


const arrayObjd = [
    {nome: 'Francisco', disciplina: 'LS'},
    {nome: 'Luiz', disciplina: 'LS'},
    {nome: 'Maria', disciplina: 'Matemática'}
]

for(const obj of arrayObjd){
    console.log(obj)
}
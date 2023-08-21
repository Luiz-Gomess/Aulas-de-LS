function verificaTriang(...lados){
    if(lados.length>3 || lados.length<3){
        return "Não é um triângulo"
    }
    if (lados[0] === lados[1] && lados[1] === lados[2] && lados[2]===lados[0]){
        return "Equilátero"
    }
    else if (lados[0] !== lados[1] && lados[1] !== lados[2] && lados[2] !== lados[0]){
        return "Escaleno"
    }
    else{
        return "Isósceles"
    }
}

console.log(verificaTriang(2,4,2))
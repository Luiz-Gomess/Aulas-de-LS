const empresas = [
    {nome: 'Amazon', fundacao: '1994', atuacao: 'E-Commercy, Cloud', kind :'Internet Company'},
    {nome: 'Facebook', fundacao: '2004', atuacao: 'Social',kind : 'Internet Company'},
    {nome: 'Alphabet Inc', fundacao: '2015', atuacao: '	Search, Cloud, Advertising',kind: 'Internet Company'},
    
]

const show = (empresas) => {
    empresas.forEach((e)=>{
        console.log(`${e.nome}............${e.fundacao}`)

    }  
    )   
}
show(empresas)








/*
const arrayObjd = [
    {nome: 'Francisco', disciplina: 'LS'},
    {nome: 'Luiz', disciplina: 'LS'},
    {nome: 'Maria', disciplina: 'Matemática'}
]

for(const obj of arrayObjd){
    console.log(obj)
}
*/
class Exame{
    constructor(){
        this.respostasAluno = []
        this.weigth = 2
        this.gabarito = ['a','b','a','c','d']       
    }

    addRespostaAluno(resposta){
        this.respostasAluno.push(resposta.toString())
    }
    gerarNotaAluno(){
    let nota = 0
        for(let i = 0; i = this.respostasAluno.length;i++ ){
            if (this.respostasAluno[i] === this.gabarito[i]){
                nota += 2
            }
        }
        
    }


}

aluno1 = new Exame()
aluno1.addRespostaAluno('a')
aluno1.addRespostaAluno('b')
aluno1.addRespostaAluno('c')


console.log(aluno1.respostasAluno)
// aluno1.gerarNotaAluno()

//declaração de variável com var

/*var nome = "Luciano"

var nome = "João"*/

//declaração de variável com let

// let nome = "Luciano"

// nome = "João"

//variável declarada com const

const nome = "Nicoly" //string

const sobrenome ="De Bem"

const valor = 21.90 //number

const isLogin = false //boolean

let preco //undefined

const endereco = null //null

const alunos = ["João ","Maria","José"]//array

const alunoDoSenai ={
    nome:"Nicoly", 
    sobrenome:"De Bem",
    turno:"noturno",
    idade:17,
    cursos:["TI"]

}

const alunosDoSenai=[
    {
        login:"Nicoly",
        email:"nicolydebemamandio@gmail.com",
        cursos:["TI"],
      
    },

    {
        login:"Maria",
        email:"maria@gmail.com",
        cursos:["design","games"],
    }
]
console.log(`Meu Nome Completo é ${nome} ${sobrenome}`)

//console.log(nome + "" +sobrenome)


//console.log(alunosDoSenai[1].cursos[0])

//console.log(alunos[0])//pega o valor do índice do array
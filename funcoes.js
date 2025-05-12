// function saudacao(){
//     console.log("Bom Dia!")
// }

// arrow function com parâmetros

// const saudacao = (turno,nome = "João")=>{
//     console.log(`${turno} ${nome}`)
// }

// saudacao(" Bom Dia" , "Nicoly")
// saudacao("Boa noite")

// const soma = (x,y)=>{
//     return x+y
// }




// const resultadoDaSoma = soma(5,8,9)

// console.log(resultadoDaSoma)

const soma = (x,y)=> x+y

const subtracao =(x,y)=> x-y 

const multiplicacao =(x,y)=> x*y 

const divisao =(x,y)=> x/y 

// função retornando o cáuculo de duas funções

// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + multiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo(10,2,5,7)

// console.log("resultado do cálculo" , resultadoDoCalculo)

// retornar o valor de varias funcoes em um return dentro de um objeto 

// const calculo = (x,y)=>{
//     return {
//         soma: soma(x,y),
//         subtracao: subtracao(x,y),
//         multiplicacao: multiplicacao(x,y),
//         divisao:  divisao(x,y)
//     }
// }
// const resultadoFinalDoCalculo = calculo(20,10)

// console.log("Resultado final" , resultadoFinalDoCalculo)

// escopo global e local (de bloco ou função)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    const escopolocal = "Escopo local"
    console.log(escopoGlobal)
}

console.log(escopoGlobal)
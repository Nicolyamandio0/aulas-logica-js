const valor01 = 10
const valor02 = "20"
const valor03 = 20
const valor04 = 30

// == , === , > , < , >= , <= , != , !==

//console.log(`O valor da variavel é ${typeof valor01}`)//typeof é uma instrução para verificar o tipo de dado da varível
//console.log(valor03 >= valor04)

const verificadorDeNumeropar = valor04 % 2 === 0

console.log(`${verificadorDeNumeropar ? "Valor Par" : "Valor Impar"}`)
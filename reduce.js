// reduce

const numeros = [2,5,7,10]
const soma = numeros.reduce((total,num) => total + num, 0)

// console.log(soma)

const produtos = [
    {
        nome:"nootbook",
        preco: 3000
    },
    {
       
        nome:"mouse",
        preco: 50
    },
    {
        nome:"monitor",
        preco: 1200  
    },
    {
        nome:"teclado",
        preco: 120
    },
    {
        
        nome:"mouse",
        preco: 70
        
    }
]

const total = produtos.reduce((soma,produto) => soma + produto.preco , 0)
console.log(total)
const numeros = [1,2,3,4,5]
const pares  = numeros.filter(num => num % 2 === 0)

// console.log("números pares" , pares)

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

const produtosMaioresQueMil = produtos.filter(produto => produto.preco > 1000)

// console.log(" produtos maiores que mil", produtosMaioresQueMil )


const mouses = produtos.filter(produto => produto.nome == "mouse" )

console.log("mouse", mouses)
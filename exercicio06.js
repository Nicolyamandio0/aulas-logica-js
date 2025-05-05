const numeros = [1,2,3,4,5]
const valoresDobrados = numeros.map(num => num * 2)

console.log(valoresDobrados)
console.log(numeros)

const usuarios= [
    {
        nome:"geladeira",
        preco:1010,
        descricao:"geladeira eletroluxs"

    },
    {
        nome:"forno",
        preco:1000,
        descricao:"forno eletrico"
    },
    {
        nome:"micro-ondas",
        preco:900,
        descricao:"micro-ondas"
    }
]

const nomesUsuario = usuarios.map(usuario => usuario.nome)

console.log("usuarios" , nomesUsuario)

const numeros = [1,2,3,4,5]
const valoresDobrados = numeros.map(num => num * 2)

// console.log(valoresDobrados)
// console.log(numeros)

const usuarios = [
    {
        nome:"juliano",
        idade: 18

    },
    {
        nome:"nicoly",
        idade:17
    },
    {
        nome:"raquel",
        idade: 54
    }
]

const nomesUsuario = usuarios.map(usuario => usuario.nome)

console.log("nomes de usuario" , nomesUsuario)
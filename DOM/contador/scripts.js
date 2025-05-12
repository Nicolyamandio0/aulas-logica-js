let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")

const btnDecrementarValor = document.querySelector("#btnDecrementar")

btnIncrementaValor.addEventListener("click", ()=>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})

btnDecrementarValor.addEventListener("click", ()=>{
    if(contador > 0){
    contador--
    resultado.textContent = `Contador: ${contador}`

   }
})
const inputForm = document.querySelector("#busca")
const botaobusca = document.querySelector("#botaobusca")
const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (event) => {
//   console.log(event.key)
// resultadoDiv.textContent = event.key
if(event.key === "Enter"){
    botaobusca.click()
}

})

inputForm.addEventListener("focus", () => {
    inputForm.style.backgroundColor = "#FF0"
})

inputForm.addEventListener("blur", () => {
    inputForm.style.backgroundColor =""
})

function searchResult(){
    const valorBusca = inputForm.value.trim()
    if(valorBusca){
        resultadoDiv.textContent = `Você buscou por ${valorBusca}`
    }else{
        resultadoDiv.textContent = "Por Favor, Insira algo na busca"
    }
}

botaobusca.addEventListener("click" , () =>{
    searchResult()
})


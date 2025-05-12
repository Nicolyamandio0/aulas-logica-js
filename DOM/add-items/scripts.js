
function adicionarItem(){
    const input = document.querySelector("#itemInput")
    const item = input.valeu.trim()

    if(item !== ""){
        const li = document.createElement("li")
        li.textContent = item
        document.querySelector("#lista").appendChild(li)
        input.value =""
    }
}


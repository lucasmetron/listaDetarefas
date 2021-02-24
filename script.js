var tarefas = []

onload = function () {
    let t = document.getElementById("telaTarefas")
    let t2 = localStorage.getItem("tarefasMemoria")
    let todasTarefas = JSON.parse(t2)

    console.log(todasTarefas)
    tarefas = todasTarefas

    for (let i = 0; i < tarefas.length; i++){
        let liNova = document.createElement ("li","checkbox") //criando tag
        let liCont = document.createTextNode(todasTarefas[i]) //conteudo da nova tag
        liNova.appendChild(liCont) //colocando conteuo dentro da nova tag

        let ulAtual = t 
        let ulItens = document.getElementsByTagName("li")

        ulAtual.insertBefore(liNova, ulItens[i])
    }

}


function addTarefa() {
    
    let tarefa = document.getElementById("contTarefa").value
    
    tarefas.push(tarefa)

    let tarefasToSting = JSON.stringify(tarefas)
    
    console.log(tarefasToSting)

    localStorage.setItem("tarefasMemoria", tarefasToSting)


   
}

function excluiTarefa() {
    localStorage.clear();
    localStorage.setItem("tarefasMemoria", "teste")
}




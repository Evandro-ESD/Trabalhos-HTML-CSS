

// function idade(){
//     let idade = prompt("Informa sua idade: ")
//     document.writeln(`A idade é: ${idade}`)
//     alert()
// }

function idade(){
    let idade;

    do {
    let entrada = prompt("Informe a idade:");

    // Se o usuário clicar em "Cancelar", sair do loop
    if (entrada === null) {
        alert("Entrada cancelada.");
        idade = null;
        break;
    }

  idade = parseFloat(entrada);
  
} while (isNaN(idade) || idade < 0);
    
    let nacionaliodade = prompt("Informe a nacionalidade:").toLowerCase()
    
    if(idade >= 16){
        if(nacionaliodade == "brasileira"){
            document.writeln("Pode votar no Brasil!!!!")
        }
        else{
            document.writeln(`Você é ${nacionaliodade}!!) Não pode votar no Brasil`)
            document.writeln(`Não pode votar no Brasil`)
        }
    }
    else{
        document.writeln("Ainda não tem idade para votar!!!")
    }
}
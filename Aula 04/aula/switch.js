// switch case - array - objetivo

// let dia = "segunda"

// if(dia === "segunda"){
//     console.log("Hoje é segunda-feira: Começo da semana.")
// }else if(dia === "quarta"){
//     console.log("Hoje é quarta: Meio da semana.")
// }else if(dia === "sexta"){
//     console.log("Hoje é sexta: Fim de semana chegando.")
// }else{
//     console.log("Dia nãoo reconhecido.")
// }
console.log("-------------------------------------------------------")

let dias = "segunda"

switch(dias){
    case "segunda": console.log("Hoje é segunda-feira: Começo da semana.") 
    break
    case "quarta":  console.log("Hoje é quarta: Meio da semana.")
    break
    case "sexta":   console.log("Hoje é sexta: Fim de semana chegando.")
    break
    default:        console.log("Dia nãoo reconhecido.")
    break
}
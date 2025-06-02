// Crie um programa que contenha um array com 8 notas
// Use for para varrer o array e switch case para analisar
// a seguinte pontoação
// nota >=  que 9    conceito A
// nota < 9 e >= 7   conceito B
// nota < 7 e >= 5   conceito C
// nota < que 5 >= 3 conceito D
// nota < que 3      conceito E
// nota == 0         conceito F



let notas = [9.5, 8, 6.5, 2.8, 10, 6.8, 7, 7.7, 0]
let conceito = ""
let nota = 0

for(let i = 0; i < notas.length; i++){
    // console.log(notas[i])
    
    let nota = notas[i]

    switch(true){
        case (nota >= 9):               conceito = "A"
        break
        case (nota < 9) && (nota >= 7): conceito = "B"
        break
        case (nota < 7) && (nota >= 5): conceito = "C"
        break
        case (nota < 5) && (nota >= 3): conceito = "D"
        break
        case (nota < 3) && (nota > 0): conceito = "E"
        break
        case (nota === 0):             conceito = "F"
        break
        default:
            conceito = "Nota inválida"
            console.log("sem notas")
    }

    console.log(`Nota: ${nota}`)
    console.log(`Conceito: ${conceito}`)
}

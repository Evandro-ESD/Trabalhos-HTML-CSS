// Teste todos os dias da seman caso não seja 
// um dia valido apareça dados invalidos
// 1 - segunda 2 - terça 3 quarta 4 quinta 5 sexta 6 sabado 7 domingo 

// let semana = 1

// for (let i = 1; i < 9; i++) {
//     semana = i
//     console.log(`Quando a escolha for ${semana} o dia será:`)


//     switch (semana) {
//         case 1:
//             console.log('segunda-feira')
//             break
//         case 2:
//             console.log('terça-feira')
//             break
//         case 3:
//             console.log('quarta-feira')
//             break
//         case 4:
//             console.log('quinta-feira')
//             break
//         case 5:
//             console.log('sexta-feira')
//             break
//         case 6:
//             console.log('sabádo')
//             break
//         case 7:
//             console.log('Domingo')
//             break
//         default:
//             console.log('Dados inválidos')
//             break
//     }
// }


let semana = 1

switch(semana){
    case 1 :
    console.log('segunda-feira')
    break
    case 2:
    console.log('terça-feira')
    break
    case 3:
    console.log('quarta-feira')
    break
    case 4:
    console.log('quinta-feira')
    break
    case 5:
    console.log('sexta-feira')
    break
    case 6:
    console.log('sabádo')
    break
    case 7:
    console.log('Domingo')
    break
    default:
    console.log('Dados inválidos')
    break
}
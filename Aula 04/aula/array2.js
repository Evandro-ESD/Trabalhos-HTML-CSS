// crie um array
Array = ["J","A","V","A","S","C","R","I","P","T"]
numeros = [1,2,3,4,5,6,7,8,9]
segundo_numeros = [11,222,33,44,55,62,71,86,90]


// for(let i = 0; i < Array.length; i++){
//     console.log(`${Array[i]}`)
// }
let count_pares = 0
let count = 0
let pares = []
let impares = []

for(let i = 0; i < segundo_numeros.length; i++){
    if(segundo_numeros[i] % 2 ===0){
        // console.log(`Só os pares do array: ${segundo_numeros[i]}`)
        count_pares++
        pares.push(segundo_numeros[i])
    }else{
        impares.push(segundo_numeros[i])
        count++
    }
}
console.log(`Números pares: ${pares} `)
console.log(`Números ímpares: ${impares} `)
console.log(`Existem ${count_pares} números pares`)
console.log(`Existem ${count} números ímpares`)
console.log(`===============================================`)

// for(let i = 0; i < segundo_numeros.length; i++){
//     if(segundo_numeros[i] % 2 != 0){
//         count++
//         console.log(`Só os ímpares do array: ${segundo_numeros[i]}`)
//     }
// }
// console.log(`Existem ${count} números ímpares`)

Array.forEach(function(item, indice){
    console.log(`frutas na posição ${indice} é --> ${item}`)
    
});
console.log("----------------- EXEMPLO 2 -----------------")

Array.forEach((item, indice) => {
    console.log(`frutas na posição ${indice} é --> ${item}`)
    
});
// looping - tipos while - do-whlie - for
// X loopings para quantidade de repetições do looping


let i = 0

while(i < 0){
    // Corpo de laço - lógica
    console.log("i ==" + i)
    i++
}
console.log("==================do=while=========================")
console.log("==================do=while=========================")

let j = 0
do {
    console.log("j ==" + j)
    j++
}
while(j < 0)

console.log("==================for=============================")
console.log("==================for=============================")

for (let x = 1; x < 5; x++){
    console.log(`Valor de x na posição ${x - 1}: ${x}`)
}
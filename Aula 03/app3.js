//  condicionais - if else, aninhado

// Acima de 1000    ->  15%
// Entre 500 e 1000 ->  10%
// Abaixo de 500    ->  5%


let valor = 850;
let desconto = 0;


function calcularDesconto(valor){
    if (valor > 1000) {
    return desconto = valor * 0.15;
    } 
    else if (valor >= 500 && valor <= 1000) {
    return desconto = valor * 0.10;
    } 
else {    
    return desconto = valor * 0.05;
    }    
}

console.log("=================")
//valor_1 = Math.random() * 1000
valor_1 = Math.floor(100)
console.log(valor_1.toFixed(0))
console.log("=================")



desconto = calcularDesconto(2000)
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);


// let valor = 850;
// let desconto = 0;

// if (valor > 1000) {
//     desconto = valor * 0.15;
// } 
// else if (valor >= 500 && valor <= 1000) {
//     desconto = valor * 0.10;
// } 
// else {    
//     desconto = valor * 0.05;
// }

// console.log(`Desconto: R$ ${desconto.toFixed(2)}`);


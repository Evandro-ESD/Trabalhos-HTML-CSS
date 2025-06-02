// Hoisting
/*copnsole.log(x); // undefined - variavel chamada antes de ser declarada
var x = 20;
copnsole.log(x); // undefined - variavel chamada antes de ser declarada
let x = 20;

copnsole.log(y); // undefined - variavel chamada antes de ser declarada
let y;
*/

//console.log(somar(20, 30)) // função não "sofre" de hoisting

/*
function somar(x, y){
    return x + y
    }
    */
var somar = function somar(x, y){
    return x + y
}

console.log(somar(20, 30)) // função não "sofre" de hoisting
console.log('==================================================')

var x = 20;
console.log(typeof x)


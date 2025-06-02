/*
Operadores Lógicos
Com esses operadores nós podemos combinar expressões 
booleanas e definir condições mais complexas em um programa.
&& - É o “E” lógico (AND). Ele retorna true se todas as condições 
forem verdadeiras.
|| - É o “OU” lógico (OR). Ele retorna true se pelo menos uma
condição for verdadeira. 
! – É o “NÃO” lógico (NOT). Ele basicamente inverte o valor de uma 
condição (true vira false e vice-versa)
*/

var n1 = 20
var n2 = 2
var n3 = 8 
var n4 = 6

console.log("Operador 'E ' " + ((n1 > n4 ) && (n3 < n4))) 
console.log("Operador 'OU' " + (n1 > n4 )  || (n3 < n4)) 
console.log("==========================================") 
console.log("================ Com 'NOT' ===============") 

console.log("Operador 'E ' " + !((n1 > n4 ) && (n3 < n4))) 
console.log("Operador 'OU' " + !(n1 > n4 )  || (n3 < n4)) 
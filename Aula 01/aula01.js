// // tipos de variaveis var, let e const

// // redeclaração
// let nome = 'Carlos';
// //let nome = 'Celso';
// nome = 'Celso';
// //console.log(nome)

// var valor = 10;
// var valor1 = "Olá você";
// var valor1 = "Olá você!!!!!!";
// console.log(valor)

// //Retribuição - Mutabilidade


// // Tipos e const
// const valorIp = 123254412;
// // valorIp = 123251; // TypeError: Assignment to constant variable.
// console.log(valorIp)

// // Hoisting

// // visibilidade
// console.log('********************************************************')
// {
//     console.log('Isso é um bloco!');
//     let idade = 25
//     const real = 50
// }

// // console.log(idade);
// // console.log(real);

// {
//     console.log('Teste de escopo!');
//     var x = 25
//     var y = 50
// }
// console.log(x);
// console.log(y);

// function() { instruçaopes e tarefas especificas }
function executar(){
    // instrução
    console.log("dentro da função!!")
    let numero = 200
    console.log(numero)
}

// executar()


array = ['a','b','c','d']


array.forEach(element => {
    console.log(element)

});
// Lista 5 de exercícios em Javascript
// Faça cada um dos programas das questões baixo interagir com o usuário, perguntando 
// claramente cada item desejado e explicando claramente cada item de resultado apresentado.
// IMPORTANTE: Como usar readline no NodeJS para interagir com o usuário pelo terminal? 
// https://conceitos.tech/tutoriais/nodejs/fundamentos-nodejs/modulo-readline-interagirusuarios-terminal-nodejs/
// Nesta lista de exercícios, trabalhar somente com laços com teste 
// lógico no início
/*
const readline = require('readline'); //Instalando o Módulo Readline
const rl = readline.createInterface({ //Criando uma Interface de Leitura
    input: process.stdin,
    output: process.stdout
});

#### modelo #####
nome_funcao = () => {
    rl.question('Qual?', (parametro) => {
        console.log('');
        rl.close();
    })
};
*/
// 1) Desenvolver um programa que exiba os números de 1 a 100.

function um_a_cem() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
// um_a_cem()

// 2) Desenvolver um programa que exiba os números em ordem decrescente de 100 até 1.
function cem_a_um() {
    for (let i = 100; i >= 1; i--) {
        console.log(i);
    }
}
// cem_a_um()
// 3) Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200.
function quadrados() {
    for (let i = 0; i <= 200; i++) {
        console.log()

    }
}

// 4) Desenvolver um programa que apresente o valor da soma dos cem primeiros números
// inteiros (1 + 2 + 3 + 4 + ...+ 97 + 98 + 99 + 100)
function sum_inteiros() {
    let soma = 0
    for (let i = 0; i <= 100; i++) {
        soma += i
    }
    console.log(soma)
}
// sum_inteiros()

// 5) Desenvolver um programa que apresente os resultados de uma tabela de um número
// qualquer. Ela deve ser impressa no seguinte formato:
// Considerando como exemplo o fornecimento do número 2
// 2 . 1 = 2
// 2 . 2 = 4
// 2 . 3 = 6
// 2 . 4 = 8
// 2 . 5 = 10
// (...)
// 2 . 10 = 20
tabela = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}
// tabela(6)

// 6) Desenvolver um programa que leia um número n qualquer menor ou igual a 50 e apresente
// o valor obtido da multiplicação sucessiva de n por 3 enquanto o produto for menor que 250.
// (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...).
multiplicaçãoSucessiva = (num) => {
    let produto = 0

    if (num <= 50) {

        while (produto <= 250) {
            produto = + num * 3
        }
    } else {
        console.log("Informe números entre 0 e 50")
    }
}
// multiplicaçãoSucessiva(50)

// 7) Desenvolver um programa que apresente todos os números divisíveis por 4 que sejam
// menores que 200. Para saber se o número é divisível por 4 será necessário verificar a lógica
// desta condição com o comando if. Sendo divisível, mostre-o; não sendo, passe para o próximo
// passo. A variável que controla o contador deve ser iniciada com valor 1.
divisiveis_por_4_menor_200 = () => {
    const lista = []
    for (let i = 4; i < 200; i++) {
        if (i % 4 === 0 && i < 200) {
            lista.push(i)
        }
    }
    console.log(`Todos os números divisivéis por 4 e menores que 200`, lista)
}
// divisiveis_por_4_menor_200()

// 8) Desenvolver um programa que apresente todos os valores numéricos inteiros ímpares
// situados na faixa de 0 a 20. Para saber se o número é ímpar, será necessário verificar essa
// condição com o comando if. Sendo ímpar, mostre-o; não sendo, passe para o próximo passo.
num_impares = () => {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 0) {
            console.log(`Número ${i} é ímpar`)
        }
    }
}
// num_impares()


// 9) Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa
// de 0 até 500. Utilize um laço que efetue a variação de 2 em 2.
soma_valores = () => {
    const soma_valores = []
    for (let i = 0; i <= 500; i++) {
        if (i % 2 === 0) {
            soma_valores.push(i)
        }
    }
    const valores_somados = soma_valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    console.log("A soma dos valores: ", valores_somados)
}
// soma_valores()


// 10) Desenvolver um programa que apresente as potências de 3 variando de 0 a 15. Deve ser
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. A
// apresentação deve observar a seguinte exibição na tela:
// 3 elevado à 0 = 1
// 3 elevado à 1 = 3
// 3 elevado à 2 = 9
// (...)
// 3 elevado à 15 = 14348907
potencias_de_tres = () => {
    for (let i = 0; i <= 15; i++) {
        console.log(`${3} elevado à ${i} = ${3 * i}`)
    }
}
// potencias_de_tres()


// 11) Elaborar um programa que apresente o valor de uma potência de uma base qualquer
// (Variável b) elevada a um expoente qualquer (Variável e), ou seja, de b
// e
// . (Sem usar
// Math.pow();)
potencia = (b, e) => {
    console.log(`Base ${b} potência ${e} = ${b ** e}`)
}
// potencia(2,2)


// 12) Desenvolver um programa que peça ao usuário para digitar diversos
// números reais, e ao final, exibir o maior e o menor número que foram 
// digitados, além da média entre TODOS os números digitados pelo usuário.
// A inserção de números deve parar quando o usuário digitar o
// número -1, e este número -1 não deve ser considerado nem como maior, 
// nem como menor, e nem na contagem da média.

/*
================================================
================================================
=|                                            |=
=|  Feito em arquivo a parte exercicio_12.js  |=
=|                                            |=
================================================
================================================
*/

// 13) Desenvolver um programa que imprima a tabuada de 3 a 6.
tabuada_3_6 = () => {
    for (let t = 3; t <= 6; t++) {
        console.log(`Tabuada do ${t}: `)
        for (let i = 1; i <= 10; i++) {
            console.log(`${t} x ${i} = ${t*i}`)
        }
    }
}
// tabuada_3_6()


// 14) Desenvolver um programa que calcule o fatorial do número 5, ou seja, 5!. Desta forma,
// temos que 5! = 5 . 4 . 3 .2 . 1 ou 5! = 1 . 2 . 3 . 4 . 5, equivalente a 120.
function fatorial(n = 5) {
    if (n <= 0) {
        return 1
    }
    else { return n * fatorial(n - 1) }
}
// console.log(`Fatorial de 5: `,fatorial())


// 15) Desenvolver um programa que apresente a série de Fibonacci até o décimo quinto termo.
// A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34, ... etc. Ela se caracteriza
// pela soma de um termo posterior com seu anterior subsequente.

fibonacci = () => {
    const fibobacci = [1, 1]

    for (let i = 2; i < 15; i++) {
        fibobacci.push(fibobacci[i - 1] + fibobacci[i - 2])
    }
    console.log(`Série de Fibonacci até o décimo quinto termo: \n`, fibobacci)
}
// fibonacci()

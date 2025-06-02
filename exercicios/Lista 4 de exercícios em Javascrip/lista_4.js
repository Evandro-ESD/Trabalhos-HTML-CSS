// Lista 4 de exercícios em Javascript
// Faça cada um dos programas das questões baixo interagir com o usuário, perguntando 
// claramente cada item desejado e explicando claramente cada item de resultado apresentado.
// IMPORTANTE: Como usar readline no NodeJS para interagir com o usuário pelo terminal? 
// https://conceitos.tech/tutoriais/nodejs/fundamentos-nodejs/modulo-readline-interagiusuarios-terminal-nodejs/


// 1) Desenvolver um programa que pergunte um número. Se este número for maior que 20, 
// então ele deverá exibir a metade deste número, senão, ele deverá exibir o número sem alterações.
exercicio_01 = () => {
    let resposta01 = document.querySelector("#resposta-ex01")
    const numero = Number(prompt(`Inserira um número:`))
    if (isNaN(numero)) {
        alert(`Entrada inválida insira apenas números!`)
        return
    }
    if (numero > 20) {
        const metade = numero / 2
        resposta01.textContent = `A metade do número informado é ${metade.toFixed(2)}`
    } else {
        resposta01.textContent = `O número informado: "${numero}"`
    } l
}

// 2) Desenvolver um programa que permita ao aluno responder qual a capital do Brasil. O 
// programa deverá exibir se a resposta está certa ou errada.
function cap_brasil() {
    const resposta02 = document.querySelector("#resposta-ex02")
    const capital = "Brasília"

    let resposta = prompt(`Qual a capital do Brasil?`)

    if (resposta === null) {
        resposta02.textContent = `Entrada nula`
        return
    }

    const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    if (normalizar(resposta) === normalizar(capital)) {
        resposta02.textContent = `Parabens você acertou!!!`
    } else {
        resposta02.textContent = `Infelizmente você errou tente outra vez!!`
    }
}

// 3) Desenvolver um programa que pergunte um número, e apresente como resposta se o 
// referido número é par ou é ímpar.
exercicio_03 = () => {
    let resposta03 = document.querySelector("#resposta-ex03")
    const numero = Number(prompt(`Informe um número: `))
    if (isNaN(numero)) {
        alert(`Entrada inválida insira apenas números!`)
        return
    }
    if (numero % 2 === 0) {
        resposta03.textContent = `O n° ${numero} é PAR`
    } else {
        resposta03.textContent = `O n° ${numero} é ÍMPAR`
    }
}

// 4) Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse 
// valor caso seja divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a 
// mensagem “Valor não é divisível por 4 e 5”.
exercicio_04 = () => {
    let resposta04 = document.querySelector("#resposta-ex04")
    const numero = parseInt(prompt(`Informe um número inteiro: `))
    if (isNaN(numero)) {
        alert(`Entrada inválida insira apenas números!`)
        return
    }
    if ((numero % 4 === 0) && (numero % 5 === 0)) {
        resposta04.textContent = `O Valor, ${numero}, é divisível por 4 e 5`
    } else {
        resposta04.textContent = `Valor, ${numero}, NÂO é divisível por 4 e 5`
    }
}

// 5) Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem 
// informando que o aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não 
// foi aprovado, indicar uma mensagem informando essa condição. Apresentar junto com a 
// mensagem de aprovação ou reprovação o valor da média obtida pelo aluno.
exercicio_05 = () => {
    let resposta05 = document.querySelector("#resposta-ex05")
    const notas = []
    const totalNotas = 4
    for (let i = 0; i < totalNotas; i++) {
        const entrada = Number(prompt(`Informe a ${i + 1}ª nota (0 a 10): `))
        if (isNaN(entrada)) {
            alert(`Entrada inválida insira apenas números!`)
            return
        }
        const nota = Number(entrada)

        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert(`Entrada inválida, insira apenas números entre 0 e 10`)
        }
        notas.push(nota)
    }

    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    const media = soma / totalNotas

    if (media >= 5) {
        resposta05.textContent = `Aluno foi APROVADO com média escolar: ${media}`
    } else {
        resposta05.textContent = `Aluno foi REPROVADO com média escolar: ${media}`
    }
}

// 6) Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor 
// da diferença entre o maior valor e o menor valor lido.
exercicio_06 = () => {
    let resposta06 = document.querySelector("#resposta-ex06")
    const entrada = Number(prompt(`Informe o 1º valor numérico inteiro:  `))
    const entrada2 = Number(prompt(`Informe o 2º valor numérico inteiro: `))
    if (isNaN(entrada) || isNaN(entrada2)) {
        alert(`Entrada inválida insira apenas números!`)
        return
    }

    let diferenca;

    if (entrada > entrada2 ) {
        diferenca = entrada - entrada2
    }else{
        diferenca = entrada2 - entrada

    }
    resposta06.textContent = `Diferença entre o maior valor e o menor valor lido: ${diferenca}`
}


// 7) Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, e exiba como 
// resposta o módulo deste valor, ou seja, o número lido como sendo positivo.
exercicio_07 = () => {
    let resposta07 = document.querySelector("#resposta-ex07")
    const entrada = Number(prompt(`Informe o 1º valor numérico inteiro:  `))
    const entrada2 = Number(prompt(`Informe o 2º valor numérico inteiro: `))
    if (isNaN(entrada) || isNaN(entrada2)) {
        alert(`Entrada inválida insira apenas números!`)
        return
    }

    let diferenca;

    if (entrada > entrada2 ) {
        diferenca = entrada - entrada2
    }else{
        diferenca = entrada2 - entrada

    }
    resposta07.textContent = `Diferença entre o maior valor e o menor valor lido: ${diferenca}`
}

// 8) Desenvolver um programa que pergunte um número inteiro qualquer e verifique se ele está 
// na faixa de 1 a 10.


// 9) Desenvolver um programa que pergunte um número e exiba a informação de que ele é 
// positivo, negativo ou nulo.


// 10) Desenvolver um programa que pergunte dois números inteiros, e apresente como 
// resultado se o segundo número informado é ou não um divisor do primeiro número 
// informado.


// 11) Desenvolver um programa que pergunte um número de 3 casas e apresente como 
// resultado somente o algarismo das centenas.

// 12) Desenvolver um programa que pergunte 5 números inteiros e identifique o maior número e 
// o menor número.

// 13) Desenvolver um programa que pergunte 3 valores (variáveis a, b e c) e ao final apresenteos dispostos em ordem crescente.
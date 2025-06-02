// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Qual é o seu nome? ', (nome) => {
//     console.log(`Olá, ${nome}!`);
//     rl.close();
// });
// rl.question('Qual é a sua cidade favorita? ', (cidade) => {
//     console.log(`Você escolheu ${cidade} como sua cidade favorita!`);
//     rl.close();
// });

// Desenvolver um programa que pergunte ao usuário o seu nome completo e seu sexo. 
// Em seguida, o programa deve apresentar os dados anteriormente informados.
function nome() {
    let nome = prompt(`Escreva seu nome completo:`)
    alert(`${nome}`)
    document.querySelector("#resposta_01").value = `Nome: ${nome}`
}

// 2. Elaborar um programa que pergunte quatro valores inteiros e apresente 2 resultados:
// a. Resultados de suas adições
// b. Resultado de suas multiplicações
// c. Fazer um programa que pergunte um valor em Dólares e apresente o 
// equivalente em Reais. Considere U$1,00 = R$5,70
function fourValues() {
    let count = 4
    let soma = 0
    let mul = 1
    while (count) {
        let numeros = parseFloat(prompt('Informe um número: '))
        count--
        soma += numeros
        mul *= numeros
    }
    alert(`Resultados de suas adições: ${soma}`)
    alert(`Resultado de suas multiplicações: ${mul}`)

    document.querySelector("#resposta_02").value = `Adições: ${soma} | Multiplicações: ${mul}`
}

function conversor() {
    let dolar = prompt("Valor em Dólares e apresente o equivalente em Reais")
    let convert = dolar * 5.7
    alert("USD $ " + dolar + " em BRL R$ " + convert.toFixed(2))
    document.querySelector("#conversor").value = `USD $${dolar} em BRL R$ ${convert.toFixed(2)}`

}

// 3. Fazer um programa que pergunte um número inteiro e apresente o seu antecessor e
// seu sucessor.
let numero = () => {
    let num = Number(prompt('Digite número inteiro para apresentar o seu antecessor e seu sucessor'))
    let antecessor = num - 1
    let sucessor = num + 1
    let resposta_03 = document.querySelector('#resposta_03')
    resposta_03.value = `Antecessor: ${antecessor} | Número  ${num} | Sucessor ${sucessor}`
}

// 4. Fazer um programa que pergunte o salário de um funcionário e apresente este salário 
// com um aumento de 15%.
salario = () => {
    let salario = Number(prompt('Digite o salário atual: '))
    let reajuste = 0.15
    let reajuste_salario = parseFloat((salario * reajuste) + salario)
    let resposta_04 = document.getElementById('resposta_04')
    resposta_04.value = `Reajuste ${reajuste}% Sal Atual ${reajuste_salario.toFixed(2)}`
}

// 5. Fazer um programa que pergunte uma temperatura ao usuário, em graus Fahrenheit, e
// apresente esta temperatura convertida em graus Celsius. A fórmula da conversão é c =
// (f – 32) x 5 / 9 , onde c é a temperatura em graus Celsius e f em Fahrenheit.
converter = () => {
    let temperatura = Number(prompt("Digite uma Temperatura em graus Fahrenheit: "))
    // c = (f – 32) x 5 / 9
    let celsius = (temperatura - 32) * 5 / 9

    let resposta_05 = document.getElementById('resposta_05')
    resposta_05.value = `${temperatura} °F = ${celsius} °C: `
}

// 6. Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre 
// estes 3 números.
media_aritmetica = () => {
    let qtd_question = 3
    let count = 0
    let soma = 0
    while (qtd_question) {
        let numeros = Number(prompt('Digite 3 números para verificar a média deles: ' + 'testam: ' + qtd_question))
        if (isNaN(numeros)) {
            alert('Entrada inválida, somente números')
            return
        }
        soma += numeros
        count++
        qtd_question--
    }
    let resposta_06 = document.getElementById('resposta_06')
    resposta_06.value = `Média = ${(soma / count).toFixed(1)}`
}

// 7. Fazer um programa que calcule e apresente a quantidade de litros que um automóvel 
// gastará em uma viagem. O programa deve coletar as seguintes informações: Distância 
// a percorrer na viagem, em quilometros; qual é o valor do consumo médio do 
// automóvel, em quilometros por litro.
verifica_litros = () => {
    alert('Vamos realizar o calculo da a quantidade de litros que seu automóvel gastará em uma viagem!!')
    let distancia = Number(prompt('Informe a distancia em quilometros:'))
    let gasto = Number(prompt('Informe consumo médio do automóvel, em quilometros por litro:'))
    if (isNaN(distancia) || isNaN(gasto) || distancia <= 0 || gasto <= 0) {
        alert('Entrada inválida, somente números positivos')
        return
    }
    let consumo_medio = distancia / gasto

    let resposta_07 = document.getElementById('resposta_07')
    resposta_07.value = `Previsão de consumo: ${(consumo_medio).toFixed(1)} litros`

}

// 8. Fazer um algoritmo que pergunte 1 número e apresente:
// a. O próprio número
// b. O quadrado deste número
// c. A raiz quadrada deste número
calcular_potencia_raiz = () => {
    let num = Number(prompt('1 número e apresente para mostrar O quadrado deste número e A raiz quadrada deste número'))
    let resposta_08 = document.getElementById('resposta_08')
    resposta_08.value = `O quadrado do ${num} = ${Math.pow(num, 2)} | Raiz = ${Math.sqrt(num).toFixed(3)}`
}


// 9. Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso,
// utilizando a fórmula prestação = valor + (valor x (taxa : 100) x tempo em dias).
verifica_atraso = () => {
    let valor = Number(prompt('Informe o valor: '))
    let taxa = Number(prompt('Informer a taxa de juros %: '))
    let dias = Number(prompt('Informe o dias de atraso: '))
    let prestacao = (valor + (valor * (taxa / 100) * dias))
    let resposta_09 = document.querySelector('#resposta_09')
    resposta_09.value = `Prestação ficará em R$${prestacao.toFixed(2)} `
}


// DICAS ÚTEIS:
// Potência:
// Math.pow(base, expoente);-
// Exemplo: Cálculo de 53
// Math.pow(5,3); -
// Raiz Quadrada:
// Math.sqrt(numero); -
// Exemplo: Raiz quadrada de 16
// Math.sqrt(16);
// Valor de PI:
// Math.PI;
// Resto da divisão:
// %
// Exemplo: Calcular o resto da divisão de 5 por 2:
// 5 % 2


// c. Fazer um programa que pergunte um valor em Dólares e apresente o
// equivalente em Reais. Considere U$1,00 = R$5,70

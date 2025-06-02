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
    alert(`Nome inserido: ${nome}`)
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
        let numeros = parseFloat(prompt('Informe um númro: '))
        count--
        soma += numeros
        mul *= numeros
    }
    alert(`Resultados de suas adições: ${soma}`)
    alert(`Resultado de suas multiplicações: ${mul}`)
}

function conversor() {
    let dolar = prompt("Valor em Dólares e apresente o equivalente em Reais")
    let convert = dolar * 5.7
    alert("USD $ " + dolar + " em BRL R$" + convert)
}

// 3. Fazer um programa que pergunte um número inteiro e apresente o seu antecessor e 
// seu sucessor.
let numero = () => {
    let num = prompt('Digite um número inteiro e apresente o seu antecessor e seu sucessor.')
    let antecessor = num - 1
    let sucessor = num + 1
    alert("Ant: " + antecessor + " | Número: " + num + "| Suc: " + sucessor)
}

// 4. Fazer um programa que pergunte o salário de um funcionário e apresente este salário 
// com um aumento de 15%.
salario = () => {
    let salario = Number(prompt('Informe o sálario para calcular o reajuste:'))
    let reajuste = 0.15
    let novo_salario = Number((salario * reajuste) + salario)
    alert('Salário após reajuste: R$' + novo_salario.toFixed(2))
}

// 5. Fazer um programa que pergunte uma temperatura ao usuário, em graus Fahrenheit, e 
// apresente esta temperatura convertida em graus Celsius. A fórmula da conversão é c = 
// (f – 32) x 5 / 9 , onde c é a temperatura em graus Celsius e f em Fahrenheit.
temperatura = () => {
    let f = Number(prompt('Informe a temperatura em Fahrenheit para converter em °C'))
    let celcius = (f - 32) * 5 / 9
    alert(f + ' °F' + " = " + celcius + " °C")
}

// 6. Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre 
// estes 3 números.
media_aritmetica = () => {
    let tentativas = 3
    let count = 0

    while (tentativas) {
        let num = Number(prompt('Informe 3 números para apresentar a média aritmética entre estes 3 números'))
        if (!isNaN(num)) {
            soma += num
            count++
        } else {
            alert('Entrada inválida!!!!!')
        }
        tentativas--
    }
    alert('A Média = ' + (soma / count))
}


// 7. Fazer um programa que calcule e apresente a quantidade de litros que um automóvel 
// gastará em uma viagem. O programa deve coletar as seguintes informações: Distância 
// a percorrer na viagem, em quilômetros; qual é o valor do consumo médio do 
// automóvel, em quilômetros por litro.
previsao_litros = () => {
    let distancia = Number(prompt('Informe sa distancia a ser percorrida:'))
    let gasto = Number(prompt('Infomre valor do consumo médio do automóvel, em quilômetros por litro:'))
    alert('Previsão de consumo de combustível: ' + (distancia / gasto) + 'Litros')
}
// 8. Fazer um algoritmo que pergunte 1 número e apresente:
// a. O próprio número
// b. O quadrado deste número
// c. A raiz quadrada deste número
calc_quadrado_raiz = () => {
    let num = Number(prompt('Informe um algaritmo para calcular o quadrado e sua raiz quadrada:'))
    let quadrado = (Math.pow(num, 2))
    let raiz = (Math.sqrt(num))
    alert('O quadrado do ' + num + '= ' + quadrado + " | Sua raiz = " + raiz.toFixed(2))
}


// 9. Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, 
// utilizando a fórmula prestação = valor + (valor x (taxa : 100) x tempo em dias).
calc_atraso = () => {
    let valor = Number(prompt('Informe o valor da presatação em atraso: '))
    let taxa = Number(prompt('Informe a taxa de juros combrada %: '))
    let dias_atraso = Number(prompt('Informe os dias de atraso: '))
    alert('O valor da prestação ficará em R$ ' + (valor + (valor * (taxa / 100) * dias_atraso)))
}

// DICAS ÚTEIS:
// Potência:
// Math.pow(base, expoente);
// Exemplo: Cálculo de 53
// Math.pow(5,3);
// Raiz Quadrada:
// Math.sqrt(numero);
// Exemplo: Raiz quadrada de 16
// Math.sqrt(16);
// Valor de PI:
// Math.PI;
// Resto da divisão:
// %
// Exemplo: Calcular o resto da divisão de 5 por 2:
// 5 % 2

// 12) Desenvolver um programa que peça ao usuário para digitar diversos
// números reais, e ao final, exibir o maior e o menor número que foram 
// digitados, além da média entre TODOS os números digitados pelo usuário.
// A inserção de números deve parar quando o usuário digitar o
// número -1, e este número -1 não deve ser considerado nem como maior, 
// nem como menor, e nem na contagem da média.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];

function perguntarNumero() {
    rl.question("Digite um número real (-1 para encerrar): ", (input) => {
        const num = Number(input);

        if (isNaN(num)) {
            console.log("Valor inválido! Digite um número real.");
            return perguntarNumero();
        }

        if (num === -1) {
            if (numeros.length === 0) {
                console.log("Nenhum número válido foi inserido.");
            } else {
                const maior = Math.max(...numeros);
                const menor = Math.min(...numeros);
                const soma = numeros.reduce((total, n) => total + n, 0);
                const media = soma / numeros.length;

                console.log(`\nResultado final:`);
                console.log(`Maior número: ${maior}`);
                console.log(`Menor número: ${menor}`);
                console.log(`Média: ${media.toFixed(2)}`);
            }
            rl.close();
        } else {
            numeros.push(num);
            perguntarNumero();
        }
    });
}

perguntarNumero();

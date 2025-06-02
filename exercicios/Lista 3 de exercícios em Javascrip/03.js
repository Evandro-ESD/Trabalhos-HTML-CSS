// Lista 3 de exercícios em Javascript
// Faça cada um dos programas das questões baixo interagir com o usuário, perguntando 
// claramente cada item desejado e explicando claramente cada item de resultado apresentado.
// IMPORTANTE: Como usar readline no NodeJS para interagir com o usuário pelo terminal? 
// https://conceitos.tech/tutoriais/nodejs/fundamentos-nodejs/modulo-readline-interagirusuarios-terminal-nodejs/

const readline = require('readline'); //Instalando o Módulo Readline
const rl = readline.createInterface({ //Criando uma Interface de Leitura
    input: process.stdin,
    output: process.stdout
});

/*
#### modelo #####
nome_funcao = () => {
    rl.question('Qual?', (parametro) => {
        console.log('');
        rl.close();
    })
};
*/
is_nan = (valor) => {
    if (isNaN(valor)) {
        console.log(`Entrada inválida ""${valor}"" Informe apenas números`)
        rl.close()
        return true
    }; return false;
}

// 1) Elaborar um programa de computador que pergunte ao usuário o valor do Raio de um
// círculo e calcule a área do referido círculo, apresentando o resultado deste cálculo.
// Obs: A fórmula da área é a = πr². Considere o valor de π = 3. 14159265.
calc_area = () => {
    rl.question("Qual raio do circulo: ", (raio) => {
        console.log('Área do circulo é: ', (3.14159265 * (Math.pow(raio, 2))).toFixed(2)) //Math.PI
        rl.close()
    })
}
calc_area()

// 2) Desenvolver um programa que calcule o salário líquido de um professor. Para elaborar o
// programa, é necessário possuir alguns dados, tais como: Valor da hora aula, número de horas
// trabalhadas no mês e percentual de desconto do INSS.
sal_líq_prof = () => {
    rl.question('Valor da hora aula: ?', (valorHoras) => {
        rl.question('Número de aulas trabalhadas: ', (horas) => {
            rl.question('Valor percentual (%) do desconto do INSS: ', (descInss) => {
                const salLiquido = (valorHoras * horas) - ((valorHoras * horas) * (descInss / 100))
                console.log('Salário Liquido do Professor: R$', salLiquido.toFixed(2));
                rl.close();
            })
        })
    })
};
// sal_líq_prof()

// 3) Fazer um programa que pergunte dois valores reais e apresente o primeiro com acréscimo
// de 30% e o segundo com desconto de 25%.


mostrar_percentual = () => {
    rl.question('Informe 1º número para mostrar acréscimo de 30%: ', (num1) => {
        const n1 = Number(num1)
        if (isNaN(n1)) {
            return console.log('Informe apenas números')
        }
        rl.question('Informe 2º número para mostrar desconto de 25%: ', (num2) => {
            const n2 = Number(num2)
            if (isNaN(n2)) {
                return console.log('Informe apenas números')
            }

            const trintaPercent = n1 + (n1 * 0.3)
            const vinteCincoPercent = n2 - (n2 * 0.25)

            console.log('Acrescimo de 30%: ', trintaPercent);
            console.log('Desconto de 25%: ', vinteCincoPercent);
            rl.close();
        })
    })
};
// mostrar_percentual()

// 4) Fazer um algoritmo que pergunte 4 números e apresente a média aritmética ponderada, 
// com pesos respectivos de 1, 2, 3 e 4.
// Obs: Sabe-se que o cálculo da média aritmética ponderada (mp) é feito da seguinte forma:
// mp = ( (num1 x peso1) + (num2 x peso2) + (num3 x peso3) + (num4 x peso4) ) / (peso1 + 
// peso2 + peso3 + peso4)
media_ponderada = () => {
    console.log('Informe 4 números para apresentar a média aritmética ponderada, com pesos respectivos de: 1, 2, 3 e 4:')
    rl.question('Primeiro número: ', (first) => {
        is_nan(first)
        rl.question('Segundo número: ', (secund) => {
            is_nan(secund)
            rl.question('Terceiro número: ', (third) => {
                is_nan(third)
                rl.question('Quarto número: ', (fourth) => {
                    is_nan(fourth)

                    const num1 = Number(first)
                    const num2 = Number(secund)
                    const num3 = Number(third)
                    const num4 = Number(fourth)

                    const peso1 = 1
                    const peso2 = 2
                    const peso3 = 3
                    const peso4 = 4

                    const mp = ((num1 * peso1) + (num2 * peso2) + (num3 * peso3) + (num4 * peso4)) / (peso1 + peso2 + peso3 + peso4)

                    console.log('média aritmética ponderada (mp): ', mp);
                    rl.close();
                })
            })

        })
    })
};
// media_ponderada()
// 5) Fazer um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, 
// utilizando a fórmula v = πr2h. Onde v=Volume, π = 3. 14159265, r = raio e h = altura.
volume_lata = () => {
    rl.question('Qual altura em centímetros?', (altura) => {
        const valor_altura = Number(altura)
        is_nan(valor_altura)
        rl.question('Qual raio em centímetros?', (raio) => {
            const valor_raio = Number(raio)
            is_nan(valor_raio)

            const volume = ((3.14159265 * Math.pow(valor_raio, 2) * valor_altura) / 1000)


            console.log('Volume da lata de óleo = ', (volume).toFixed(3), 'cm³'); //alt+ 0179 = ³
            rl.close();
        })
    })
};
// volume_lata()
// 6) Fazer um algoritmo que pergunte dois valores a e b, efetue a troca dos valores, de forma que 
// a variável "a" passe a possuir o valor da variável "b", e que a variável "b" passe a possuir o 
// valor da variável "a", e apresente os valores trocados.
troca_valor = () => {
    rl.question('Informe valor para variável "a": ', (a) => {
        rl.question('Informe valor para variável "b": ', (b) => {
            console.log('=================================');
            console.log('Valor original da variável a: ', a);
            console.log('Valor original da variável b: ', b);
            let var_a = b
            let var_b = a

            console.log('=================================');
            console.log('Variável "a" recebe "b" ', var_a);
            console.log('Variável "b" recebe "a" ', var_b);

            rl.close();
        })
    })
};
// troca_valor()

// 7) Fazer um algoritmo que pergunte os valores dos catetos de um triângulo retângulo e 
// apresente o valor da hipotenusa.
// Obs: A fórmula é hipotenusa² = cateto1² + cateto2² ou, se preferir, hipotenusa = √( cateto1² + 
// cateto2²).

calculo_hipotenusa = () => {
    rl.question('Calculo da hipotenusa:\nInforme o valor de um dos catetos: ', (cat1) => {
        const valor_cat1 = cat1
        if (is_nan(valor_cat1)) return
        rl.question('Informe o valor do outro cateto?: ', (cat2) => {
            const valor_cat2 = cat2
            if (is_nan(valor_cat2)) return


            const hipotenusa = Math.sqrt(
                (
                    (Math.pow(valor_cat1, 2))
                    +
                    (Math.pow(valor_cat2, 2))
                )
            )

            const hipotenusa2 = Math.hypot(valor_cat1, valor_cat2)

            if ((valor_cat1 + valor_cat2) <= hipotenusa) {
                console.log("A soma de dois dos seus lados é igual ou menor que o terceiro lado (desigualdade triangular).")
                return
            }

            console.log('A hipotenusa do triângulo retangulo é: ', hipotenusa.toFixed(2));
            console.log('A hipotenusa do triângulo retangulo é: ', Math.floor(hipotenusa));
            console.log('A hipotenusa do triângulo retangulo é: ', Math.round(hipotenusa));
            console.log('A hipotenusa do triângulo retangulo usando "Math.hypot()": ', hipotenusa2.toFixed(2));
            rl.close();

        })
    })
};
// calculo_hipotenusa()
// 8) Fazer um algoritmo que pergunte a base e a altura de um retângulo, e apresente:
// a) O perímetro deste retângulo
// b) A área deste retângulo
// c) A diagonal deste retângulo
// Eis as fórmulas:
// perímetro = Soma de todos os lados do retângulo.
// área = Base x Altura
// diagonal² = base² + altura² ou, se preferir, diagonal = √(base² + altura²).
perimetro_area_diag_triangulo = () => {
    rl.question('===========================\nInsira a Base do retângulo: ', (base) => {
        if (is_nan(base)) return;
        rl.question('Insira a Altura do retângulo: ', (altura) => {
            if (is_nan(altura)) return;
            console.log(`===========================\n`)
            const valor_base = Number(base)
            const valor_altura = Number(altura)
            const perimetro = ((valor_base * 2) + (valor_altura * 2))
            const area = (valor_base * valor_altura)
            const diagonal = Math.sqrt(Math.pow(valor_base, 2) + Math.pow(valor_altura,2))

            console.log(`a) O perímetro deste retângulo: ${perimetro}\nb) A área deste retângulo: ${area}\nc) A diagonal deste retângulo: ${diagonal.toPrecision(2)}`);
            rl.close();
        })
    })
};
// perimetro_area_diag_triangulo()

// 9) Fazer um algoritmo que solicite a razão de uma pa (Progressão Aritmética) e o valor do 1º
// termo. E apresente o 10º termo da série.
pa_decimo_termo = () => {
    rl.question('Insira a razão de uma PA: ', (razao) => {
        if(is_nan(razao)) return
        rl.question('Insira o 1º termo: ', (first_term)=>{
            if(is_nan(first_term)) return
            const valor_razao = Number(razao)
            const valor_first_term = Number(first_term)
            // an = a1 + (n - 1).r
            // an: termo que queremos calcular
            // a1: primeiro termo da P.A.
            // n: posição do termo que queremos descobrir
            // r: razão

            const n = Number(10)

            const decimo_termo = valor_first_term + (n - 1) * valor_razao

            console.log('10º termo da PA: ',decimo_termo);
            rl.close();
        })
    })
};
// pa_decimo_termo()

// 10) Fazer um algoritmo que solicite a razão de uma pg (Progressão Geométrica) e o valor do 1º
// termo. E apresente o 5º termo da série.
pa_quinto_termo = () => {
    rl.question('Insira a razão de uma PA: ', (razao) => {
        if(is_nan(razao)) return
        rl.question('Insira o 1º termo: ', (first_term)=>{
            if(is_nan(first_term)) return
            const valor_razao = Number(razao)
            const valor_first_term = Number(first_term)
            // an = a1 + (n - 1).r
            // an: termo que queremos calcular
            // a1: primeiro termo da P.A.
            // n: posição do termo que queremos descobrir
            // r: razão

            const n = Number(5)

            const quinto_termo = valor_first_term + (n - 1) * valor_razao

            console.log('5º termo da PA: ',quinto_termo);
            rl.close();
        })
    })
};
// pa_quinto_termo()

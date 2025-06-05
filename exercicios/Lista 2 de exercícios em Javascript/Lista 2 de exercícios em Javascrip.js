// Lista 2 de exercícios em Javascript
// Faça cada um dos programas das questões baixo interagir com o usuário, perguntando 
// claramente cada item desejado e explicando claramente cada item de resultado apresentado.
// IMPORTANTE: Como usar readline no NodeJS para interagir com o usuário pelo terminal? 
// https://conceitos.tech/tutoriais/nodejs/fundamentos-nodejs/modulo-readline-interagirusuarios-terminal-nodejs/

// 1. Desenvolver um programa que pergunte o valor da conta a ser paga no restaurante e 
// exiba como resposta o valor com o acréscimo dos 10% da gorjeta do garçom.

verifica_se_num = (numeros) => {
    if (isNaN(numeros)) {
        alert('Entrada inválida, somente números')
        return
    }
}

conta = () => {
    let valor = Number(prompt(`Valor ada conta: `))
    verifica_se_num(valor)
    let contaSerPagar = valor + (valor * 0.1)
    let resposta_01 = document.querySelector('#resposta_01')
    resposta_01.value = `Conta ficará em R$${contaSerPagar.toFixed(2)}`
    // alert(`Funciona!!`)
}

// 2. Desenvolver um programa que faça duas perguntas: o valor referente às horas atuais e 
// o valor referente aos minutos atuais. Exemplo, se agora são 09:35h o usuário deverá 
// informar como resposta às horas atuais o valor 09 e como resposta aos minutos atuais 
// o valor 35. Em seguida o programa deverá apresentar como resposta quantos minutos 
// já se passaram desde às 00:00h deste dia.
tempo_passado = () => {
    let horas = Number(prompt(`Informe a hora atual: `))
    verifica_se_num(horas)
    if (horas < 0 || horas > 24) {
        alert(`Entrada para horas inválida: ${horas}\nHoras entre 00h e 24h`)
        return
    }
    let minutos = Number(prompt(`Informe o minuto atual: `))
    verifica_se_num(minutos)
    if (minutos < 0 || minutos > 59) {
        alert(`Entrada para minutos inválida: ${minutos}`)
        return
    }
    let horaParaMuinutos = horas * 60
    let minutosTotais = minutos + horaParaMuinutos

    // alert(`${horaAtual}${tempo_passado}`)
    let resposta_02 = document.querySelector('#container')
    // resposta_02.value = `${horaAtual}${tempo_passado}`
    // resposta_02.value = `${tempo_passado}`

    resposta_02.innerHTML = `<div style="white-space: normal; word-break: break-word;"> Se passaram ${minutosTotais} minutos</div>`;
}


// 3. Desenvolver um programa que pergunte ao usuário o seu peso (em quilos) e sua altura 
// (em metros). Ao final o programa deverá exibir na tela para o usuário o valor do peso 
// informado em gramas e a altura em centímetros.
converter = () => {
    let peso = Number(prompt(`Infome seu peso`))
    let altura = Number(prompt(`Infome sua altura em metros "Exemplo: 1.80:`))
    let pesoEmGramas = (peso * 1000)
    let alturaEmCentimetros = (altura * 100)
    alert(`Peso em gramas: ${pesoEmGramas}g\nAltura em centímetros: ${alturaEmCentimetros}`)
    let resposta_03 = document.querySelector('#resposta_01')
    resposta_03.value = `Peso em gramas: ${pesoEmGramas}g\nAltura em centímetros: ${alturaEmCentimetros}`
}

// 4. Desenvolver um programa que pergunte ao usuário o seu peso e sua altura. Ao final o 
// programa deverá exibir na tela o valor do índice de massa corporal desta pessoa (IMC).
// • Fórmula: IMC = peso / altura2
// • Obs: peso em quilos e altura em metros.
imc = () => {
    let peso = Number(prompt(`Infome seu peso em quilos`))
    verifica_se_num(peso)
    let altura = Number(prompt(`Infome sua altura em metros "Exemplo: 1.80:`))
    verifica_se_num(altura)
    if (altura > 2.5) {
        alert(`!!!!`)
        return
    }
    let imc = (peso / altura)
    // alert(`Seu IMC é : ${imc}`)
    let resposta_04 = document.querySelector('#resposta_04')
    resposta_04.value = `Seu IMC é : ${imc.toFixed(2)}`

}

// 5. Fazer um algoritmo que pergunte dois números e ao final apresente os seguintes 
// valores: a soma dos dois números, a subtração do primeiro pelo segundo número, a 
// subtração do segundo pelo primeiro número, a multiplicação entre os dois números, a 
// divisão do primeiro pelo segundo número, e também o resto da divisão do primeiro 
// pelo segundo número.
somados_dois_numeros = () => {
    let num1 = Number(prompt(`Informe o primeiro número: `))
    let num2 = Number(prompt(`Informe o segundo número: `))
    let soma = num1 + num2
    let subtracao = num1 - num2
    let subtracao2 = num2 - num1
    let multiplicacao = num2 * num1
    let divisao = num1 / num2
    let restoDivisao = num1 / num2

    let resposta_05 = document.querySelector('#resposta_05')
    resposta_05.value = `${soma}`

    let resposta_05a = document.querySelector('#resposta_05a')
    resposta_05a.value = `${subtracao}`

    let resposta_05b = document.querySelector('#resposta_05b')
    resposta_05b.value = `${subtracao2}`

    let resposta_05c = document.querySelector('#resposta_05c')
    resposta_05c.value = `${multiplicacao}`

    let resposta_05d = document.querySelector('#resposta_05d')
    resposta_05d.value = `${divisao}`

    let resposta_05e = document.querySelector('#resposta_05e')
    resposta_05e.value = `${restoDivisao}`

}

// 6. Fazer um algoritmo que pergunte o nome de um vendedor, o seu salário fixo e o total
// de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha
// 15% de comissão sobre suas vendas efetuadas, exibir ao final o seu nome, o salário
// fixo, a comissão e o salário completo (fixo + comissão sobre vendas) no final do mês.
salrario_vendedor = () => {
    let nome = prompt(`Nome: `)
    let salario_fixo = Number(prompt(`Salário fixo R$: `))
    verifica_se_num(salario_fixo)
    let total_de_vendas = Number(prompt((`Total de vendas efetuadas por ele no mês (em dinheiro)`)))
    verifica_se_num(total_de_vendas)
    let tx_comissao = 0.15
    let comissao = (total_de_vendas * tx_comissao)
    let salario_total = (salario_fixo + total_de_vendas + comissao)
    alert(`Nome: ${nome}\nSalário: ${salario_fixo}\nComissão: ${comissao}\nSalário completo: ${salario_total} `)

    let resposta_06 = document.querySelector('#resposta_06')
    resposta_06.value = `${salario_total}`
}

// 7. A Loja Mamão com Açúcar está vendendo seus produtos em até 10 prestações sem
// juros. Faça um algoritmo que pergunte um valor de uma compra, o número de
// prestações escolhidas e apresente como resultado o valor das prestações.
prestacoes = () => {
    const valor = Number(prompt(`Informe o valor da venda: `))
    const prestacao = Number(prompt(`Informe o número de parcelas: `))
    if (prestacao > 10) {
        alert(`Número de parcelas acima do permitido!!`)
        return
    }
    let valor_parcela = valor / prestacao
    const resposta_07 = document.querySelector("#resposta_07")
    resposta_07.value = `Valor parcela: ${valor_parcela.toFixed(2)}`
    alert(`Valor da presatação R$${valor_parcela.toFixed(2).replace(" ", "0")}`)

}

// 8. Fazer um algoritmo que receba o preço de custo de um produto e mostre como
// resposta o valor de venda. Sabe-se que o preço de custo receberá um acréscimo de
// acordo com um percentual informado pelo usuário.
valor_de_venda = () => {
    const produto = Number(prompt(`Valor do produto:`))
    verifica_se_num(produto)
    const perc_venda = Number(prompt(`Percentual de venda entre 0% e 99%:`))
    verifica_se_num(tx_venda)
    if (perc_venda < 0 || perc_venda > 99) {
        alert(`Informe um percentual "%" valido!`)
        return
    }
    let tx_venda = (perc_venda / 100)

    let venda = produto * tx_venda

    alert(`Valor da venda: ${venda}, ${tx_venda}`)
}

// 9. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
// mostre-a expressa apenas em dias. Obs: Considere os anos com 365 dias e os meses
// com 30 dias.
idade_em_dias = () => {
    let idadeanos = Number(prompt(`Informe a idade em anos: `))
    verifica_se_num(idadeanos)
    let idademeses = Number(prompt(`Informe a idade em meses: `))
    verifica_se_num(idademeses)
    let idadedias = Number(prompt(`Informe a idade em dias: `))
    verifica_se_num(idadedias)

    let mostraIdadeEmDias = `${(idadeanos * 365) + (idademeses * 30) + (idadedias)}`

    alert(`Sua idade em dias: ${mostraIdadeEmDias}`)

}

// 10. Escreva um algoritmo pergunte o número total de eleitores de um município, o
// número de votos brancos, nulos e válidos e apresente como resposta o percentual que
// cada um representa em relação ao total de eleitores.
percentual_eleitores = () => {
    const n_eleitores = Number(prompt(`Informe número de eleitoes: `))
    const n_brancos = Number(prompt(`Informe número de votos brancos: `))
    const n_nulos = Number(prompt(`Informe númedro de votos nulos: `))
    const n_validos = Number(prompt(`Informe número de votos válidos: `))

    
    const total_votos = n_brancos+n_nulos+n_validos
    if(total_votos !== n_eleitores){
        alert(`Números de votos não corresponde ao números de eleitores`)
    }else{
        const percentual_brancos = (n_brancos / n_eleitores) * 100
        const percentual_nulos = (n_nulos / n_eleitores) * 100
        const percentual_validos = (n_validos / n_eleitores) * 100
        
    const resposta10 = document.querySelector("#resposta_10")
    resposta10.value = `Percentual votos em branco: ${percentual_brancos}%`

    const resposta10_2 = document.querySelector("#resposta_10-2")
    resposta10_2.value = `Percentual votos em nulos: ${percentual_nulos}%`

    const resposta10_3 = document.querySelector("#resposta_10-3")
    resposta10_3.value = `Percentual votos em válidos: ${percentual_validos}%`
}}


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

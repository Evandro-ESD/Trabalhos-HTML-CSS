// Nova Lista de Exercícios – JavaScript Intermediário

// Foco: Laços, switch, if, operadores, arrays
// Metodologia: MESEP
// Questão 1 — Classificação por idade
// • Motivação: Sistemas reais frequentemente classificam dados de entrada (ex: cadastro de clientes).
// • Exploração: Dado um número de pessoas e suas idades, classifique-as por faixa etária.
// • Sistematização: for, if, contadores.
// • Exercício:
// Peça ao usuário quantas pessoas deseja cadastrar. Para cada uma, informe a idade.
// Classifique quantas são: crianças (até 12), adolescentes (13–17), adultos (18–59) e idosos (60+).
// Mostre o total de cada categoria.
cadastrar = () => {
    bd_pessoaas = []
    bd_idade    = []
    let Npessoas = Number(prompt("Informe quantas pessoas deseja cadastrar: "))
    if(isNaN(Npessoas)) {
        alert(`Informe somente números!!`) 
        return
    }
    while(Npessoas <= 0)
        {
            let pessoas = prompt(`Nome da ${Npessoas}º pessoas: `)
            let idade = prompt(`Infome a idade da ${pessoas}:  `)
            Npessoas--
        }      

}
// cadastrar()



// Questão 2 — Controle de estoque com switch
// • Motivação: Sistemas de estoque operam com menus e comandos.
// • Exploração: Simule uma operação de entrada e saída de produtos.
// • Sistematização: switch, while, operadores aritméticos.
// • Exercício:
// Comece com 100 unidades no estoque.
// Exiba um menu com as opções:
// 1. Entrada de produto
// 2. Saída de produto
// 3. Verificar estoque
// 4. Sair
// Atualize o estoque conforme a opção até o usuário sair.
const produtos = []
estoque = () => {
    let opcao;
    do{
        opcao = prompt(
            "Menu\n1. Entrada de produto\n2. Saída de produto\n3. Verificar estoque\n4. Sair"
        )
        switch(opcao){
            case "1": const produto = prompt(`Entre com o produto: `)
                    produtos.push(produto)
                    alert(`Produto cadastrado!`)
                    break

            case '2': const saida_produto = prompt('Entre com cod do produto para saida: ')
                    if(produtos[saida_produto]){
                        const prod_removido = produtos.splice(saida_produto, 1) // entra no banco produtos para remover conforme splice
                        alert(`Produto removido: ${prod_removido} `)
                    }
                    else alert(`Índice invalido!`)
                    break

                case '3': 
                    if(produtos.length <= 0) alert(`Nenhum produto cadastrado!!`)
                    else produtos.forEach((produto, idx) => alert(`Cod: ${idx} | Produto: ${produto}`)) // valor e índice
                    break

            case '4': alert(`Sair`)
                break

            default:
                alert(`Entrada inválida!`)
        }
    }while(opcao !== "4")
}
// estoque()


// Questão 3 — Validação de senha com repetição
// • Motivação: Segurança e controle de acesso são essenciais.
// • Exploração: Verifique se a senha está correta com limite de tentativas.
// • Sistematização: while, if, operadores lógicos.
// • Exercício:
// A senha correta é "senai123".
// Permita até 3 tentativas. Se acertar, mostre "Bem-vindo". Caso contrário, bloqueie o acesso.

sistema = () => {

    let tentativas = 2
    const senha = "senai123"
    
    while(tentativas > 0){
        let inputSenha = prompt(`Informe uma senha valida`)
        if(senha === inputSenha){
            alert(`Bem vindo!!`)   
            }else{
                alert(`Senha inválida!!!`)
                alert(`Faltam ${tentativas}`)
            }
        tentativas--
    }
}
// sistema()

// Questão 4 — Números primos em um intervalo
// • Motivação: Números primos são usados em criptografia e lógica computacional.
// • Exploração: Verificar se um número é primo exige verificação de divisores.
// • Sistematização: for aninhado, if.
// • Exercício:
// Peça um número inicial e final. Exiba todos os números primos nesse intervalo.
numeros_primos = ()=>{
    for(let i = 0; i < 2; i++){
        if(isNaN(i) && i < 2) {
            let numeros = Number(prompt(`Infome ${numeros}º de um intervalo de números: `))
        }
    } 
}



// Questão 5 — Simulador de fila de atendimento
// • Motivação: Muitas aplicações simulam filas (bancos, hospitais, eventos).
// • Exploração: Adicionar/remover pessoas de uma fila.
// • Sistematização: Arrays, push(), shift(), switch, while.
// • Exercício:
// Exiba um menu com:
// o
// 1. Adicionar pessoa à fila
// o
// 2. Atender próxima pessoa
// o
// 3. Mostrar fila atual
// o
// 4. Sair
// Use array para gerenciar a fila.



// Questão 6 — Simulador de pesquisa de satisfação
// • Motivação: Coletar dados de satisfação de clientes.
// • Exploração: Receber notas de 0 a 10 e classificar em faixas.
// • Sistematização: switch, for, contadores.
// • Exercício:
// Solicite notas de 10 clientes. Classifique-as como:
// o Ruim (0–4)000000000000
// o Regular (5–7)
// o Ótimo (8–10)
// Exiba quantos votos cada categoria recebeu.




// Questão 7 — Cálculo de média com múltiplas tentativas
// • Motivação: É comum que alunos façam novas provas para melhorar a nota.
// • Exploração: Capturar várias notas e calcular a média final.
// • Sistematização: for, operadores, if.
// • Exercício:
// Peça ao usuário o nome de 5 alunos. Para cada um, solicite 3 notas.
// Calcule e exiba a média e se o aluno foi aprovado (>=7) ou reprovado.



// Questão 8 — Análise de vendas com array e condições
// • Motivação: Empresas analisam o desempenho diário de vendas.
// • Exploração: Processar e filtrar dados com operadores.
// • Sistematização: Array, for, if, operadores.
// • Exercício:
// Considere um array com valores de vendas de 7 dias:
// let vendas = [100, 250, 300, 50, 400, 700, 150]
// Exiba:
// o Total vendido
// o Média de vendas
// o Quantos dias venderam acima de 300



// Questão 9 — Verificar se um número está na lista
// • Motivação: Procurar elementos em listas é parte de buscas e validações.
// • Exploração: Verificar existência de item com for e if.
// • Sistematização: for, if, comparação.
// • Exercício:
// Dado um array de 10 números, peça ao usuário um número e diga se ele está presente ou não na lista.



// Questão 10 — Simulador de caixa eletrônico
// • Motivação: Sistemas bancários precisam processar valores com regras específicas.
// • Exploração: Calcular saque com o menor número de notas.
// • Sistematização: while, if, operadores.
// • Exercício:
// Peça um valor inteiro (mínimo 10) e informe quantas notas de R$ 100, R$ 50, R$ 20 e R$ 10 serão entregues no
// saque.
// 5 valores digitados - esses valores seeram somados e no final do progrma 
// mostre o total


function somar() {
    let soma = 0
    let count = 0
    while (count < 5) {
        let numero = Number(prompt("Digite um valor:"))
        if(isNaN(soma))
        soma += numero
        count++
    }
    alert(`A soma dos cinco números é: ${soma}`);
}



//

function calcular(){
    let resultado = document.getElementById("resultado")
    let resultado2 = document.getElementById("resultado_html")

    let operador_math = document.querySelector('input[name="operador"]')

    let num1     = parseFloat(prompt(`Digite o primeiro valor:`))
    let operador = prompt(`Digite a operação desejada (+, -, *, /):`)
    let num2     = parseFloat(prompt(`Digite o segundo valor:`))

    let res      = 0

    switch(operador){
        case "+": 
            // alert(`${num1 + num2}`)
            resultado.style.fontSize = "50px"
            resultado.innerText = num1 + num2
            // res_html.value      = num_1 + num_2
            
        break
        case "-": 
            // alert(`${num1 - num2}`)
             resultado.style.fontSize = "50px"
            resultado.innerText = num1 - num2
        break
        case "*": 
            // alert(`${num1 * num2}`)
             resultado.style.fontSize = "50px"
            resultado.innerText = num1 * num2
        break
        case "/": 
            // alert(`${num1 / num2}`)
             resultado.style.fontSize = "50px"
            resultado.innerText = num1 / num2
        break
        default:
            alert(`Operador invalido: ${operador}`)
    }


}
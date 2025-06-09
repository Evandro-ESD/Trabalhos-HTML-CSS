const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputMenssagem = document.getElementById('menssagem')
const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener("click", ()=>{
    if(!inputNome.value || !inputEmail.value || !inputMenssagem.value){
        alert(`Preencha todos os campos do formulário`)
    }else{
        alert(`Menssagem enviada com sucesso! Agradeço pelo seu contato.`)
    }
})

document.querySelector("#linkedin").addEventListener('click', ()=>{
    alert(`Desculpe perfil no Linkedin em manutenção!!`)
})
import { registrar } from "./autenticador.js"

const form = document.querySelector('#form-cadastro')
const aviso = document.querySelector('#aviso')
//const aviso2 = document.querySelector('#aviso2')
const email = document.querySelector('#email')

// Limpa a mensagem do aviso quando o usuário altera o e-mail
email.addEventListener('input', () => {
    aviso.textContent = ""
    //aviso2.textContent = ""
})

//Registrar o usuario ao enviar o formulario
form.addEventListener('submit', (evento) =>{
    evento.preventDefault() //impede o recarregamento da pagina
    

    const usuario = {
        nome: document.querySelector('#nome').value, 
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value

    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //variavel que recebe uma expressão regular ou regex

    if (!emailValido.test(usuario.email)) {
        aviso.textContent = "Insira um e-mail válido."
        return
    }
 

      aviso.textContent = "";

    try{
        registrar(usuario)
        alert('Cadastro realizado! Faça login para continuar.')
        window.location.href = 'login.html'
    }catch(erro){
        aviso.textContent = erro.message
    }
})




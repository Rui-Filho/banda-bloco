/* CÓDIGO PARA ENVIAR O FORMULÁRIO DE MENSAGEM AO EMAIL DA BLOCO*/

const PUBLIC_KEY = "Qyisl1ChcK1cUF1cj";
const SERVICE_ID = "service_4ntim3e";
const TEMPLATE_ID = "template_xkjgb5e";


const form = document.querySelector('#form-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    

emailjs.init({
    publicKey: PUBLIC_KEY,
});

emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form)
.then((response) => alert("Mensagem enviada com sucesso!"))
.catch((error) => {
    console.log(error);
    alert("Ocorreu um erro com o envio de seu e-mail")
     });

});


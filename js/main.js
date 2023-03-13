const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function redirectToPage() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tipoIngresso = document.getElementById("tipo-ingresso").value;
    var nascimento = document.getElementById("nascimento").value;

    if (nome === "" || email === "" || nascimento === "") {
        alert("Por favor, insira os dados nos campos.")
    }
    else {
        validarIdade()
    }

    function validarIdade() {
        const resultadoNascimento = new Date(nascimento); // Substitua com a data de nascimento da pessoa
        const idade = new Date().getFullYear() - resultadoNascimento.getFullYear();
        if (idade >= 10) {
            validarEmail()
        } else {
            alert("Você precisa ter mais de 10 anos para entrar no evento.")
        }
    }
    
    function validarEmail() {
        const regex = /\S+@\S+\.\S+/;
        const isValid = regex.test(email);

        if (!isValid) {
            alert("Por favor, insira um endereço de email válido.");
        } else {
            window.location.href = "confirmacao-ingresso.html?nome=" + nome + "&email=" + email + "&tipoIngresso=" + tipoIngresso + "&nascimento=" + nascimento;
        }
    }
}

var urlParams = new URLSearchParams(window.location.search);
var nome = urlParams.get('nome');
var email = urlParams.get('email');
var tipoIngresso = urlParams.get('tipoIngresso');
var nascimento = urlParams.get('nascimento');


document.getElementById("Nome-ingresso").innerHTML = nome
document.getElementById("Tipo-ingresso").innerHTML = tipoIngresso
document.getElementById("Nascimento-ingresso").innerHTML = "Nascimento:" + nascimento


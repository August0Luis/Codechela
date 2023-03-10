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
// // Configuraçao do formulario

// const botaoEnviar = document.querySelector(".comprar")
// const nomeDoUsuario = document.querySelector("#capturaNomeDeUsuario")

// botaoEnviar.addEventListener("click", () => {
//     window.location.href = "confirmacao-ingresso.html";

// })


// function redirectToPage() {
//     var inputValue = document.getElementById("myInput").value;
//     localStorage.setItem("inputValue", inputValue);

//     window.location.href = "confirmacao-ingresso.html";
// }
// var nomeNoIngresso = localStorage.getItem("inputValue");
// document.getElementById("Nome-ingresso").innerHTML = nomeNoIngresso;


function redirectToPage() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tipoIngresso = document.getElementById("tipo-ingresso").value;
    var nascimento = document.getElementById("nascimento").value;

    window.location.href = "confirmacao-ingresso.html?nome=" + nome + "&email=" + email + "&tipoIngresso=" + tipoIngresso + "&nascimento=" + nascimento;
}

var urlParams = new URLSearchParams(window.location.search);
var nome = urlParams.get('nome');
var email = urlParams.get('email');
var tipoIngresso = urlParams.get('tipoIngresso');
var nascimento = urlParams.get('nascimento');


document.getElementById("Nome-ingresso").innerHTML = nome
document.getElementById("Tipo-ingresso").innerHTML = tipoIngresso
document.getElementById("Nascimento-ingresso").innerHTML = "Nascimento:" + nascimento


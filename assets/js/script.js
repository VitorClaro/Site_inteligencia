'use strict';

// Detector de eventos a vários elementos 
const addEventOnElements = (elements, eventType, callback) =>
    elements.forEach(element => element.addEventListener(eventType, callback));

// Encontra os elementos necessários para alternar a barra de navegação
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

// Alterna a visibilidade da barra de navegação móvel e a sobreposição associada 
const toggleNavbar = () => {
    [navbar, overlay, document.body].forEach(element => element.classList.toggle("active"));
  };

// Detector de eventos de clique a todos os botões de alternância da barra de navegação
addEventOnElements(navTogglers, "click", toggleNavbar);

// * cabeçalho ativo quando a janela rola para baixo até 100px 
// */ 
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
 if (window.scrollY > 100) {
   header.classList.add("active");
 } else {
   header.classList.remove("active");
 }
});
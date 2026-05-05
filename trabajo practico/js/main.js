import TriviaAPI from "./TriviaAPI.js";
import TriviaGAME from "./TriviaGAME.js";

// const contenedor_el_del_emdio = document.querySelector('#1');
const api = new TriviaAPI();
const game = new TriviaGAME();

const contenedor_menu = document.querySelector('#contenedor-menu');

const contenedor_juego = document.querySelector('#contenedor-juego');

contenedor_juego.style.display = "none";

const boton_iniciar_juego = document.querySelector('#boton-jugar');

const titulo_dificultad = document.querySelector('#titulo-dificultad');

const boton_dif_facil = document.querySelector('#boton-dif-facil');

const boton_dif_medio = document.querySelector('#boton-dif-medio');

const boton_dif_dificil = document.querySelector('#boton-dif-dificil');

boton_iniciar_juego.addEventListener('click', () => {
    contenedor_juego.style.display = "flex";
    contenedor_menu.style.display = "none";
});

const botones = [boton_dif_facil, boton_dif_medio, boton_dif_dificil];

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        titulo_dificultad.textContent = `Dificultad: ${boton.dataset.difficulty}`;
    });
});

function decodificarHTML(texto) {
    contenedor_el_del_emdio.createElement('textarea');
    // contenedor_el_del_emdio.innerHTML = texto;
    // return contenedor_el_del_emdio.value;
}
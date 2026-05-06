// Bruno González - Martín Baras

import TriviaAPI from "./TriviaAPI.js";
import TriviaGAME from "./TriviaGAME.js";

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

const selector_categorias = document.querySelector('#categories-group');

let dificultad_seleccionada;
let categoria_seleccionada;

boton_iniciar_juego.addEventListener('click', () => {
    if (dificultad_seleccionada && categoria_seleccionada) {
        console.log(dificultad_seleccionada, categoria_seleccionada);
        contenedor_juego.style.display = "flex";
        contenedor_menu.style.display = "none";
        console.log(`Configuracion elegida: ${dificultad_seleccionada}, ${categoria_seleccionada}`)
        
    }
                                // ( || ): O lógico
    else if (!dificultad_seleccionada || !categoria_seleccionada) {
        alert('Te falta street');
    }
});

const botones = [boton_dif_facil, boton_dif_medio, boton_dif_dificil];

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        titulo_dificultad.textContent = `Dificultad: ${boton.dataset.difficulty}`;

        if (boton.dataset.difficulty === "Fácil") {
            dificultad_seleccionada = 1;
        }
        else if (boton.dataset.difficulty === "Medio") {
            dificultad_seleccionada = 2;
        }
        else {
            dificultad_seleccionada = 3;
        }
    });
});

const categorias = [{"id":1,"name": "Seleccione una categoria"}];
const m = await api.getCategorias();
const todas = categorias.concat(m);

selector_categorias.innerHTML = todas.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

selector_categorias.addEventListener('change', () => {
    selector_categorias.value = selector_categorias.value; // .value devuelve string
    if(selector_categorias.value === "1") {
        selector_categorias.value = 9;
    }
    categoria_seleccionada=selector_categorias.value
});
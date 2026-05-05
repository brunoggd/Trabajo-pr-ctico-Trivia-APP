// Bruno González - Martín Baras

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

const selector_categorias = document.querySelector('#categories-group');

boton_iniciar_juego.addEventListener('click', () => {
    if (dificultad_seleccionada && categoria_seleccionada) {
        console.log(dificultad_seleccionada, categoria_seleccionada);
        contenedor_juego.style.display = "flex";
        contenedor_menu.style.display = "none";
    }
                                // ( || ): O lógico
    else if (!dificultad_seleccionada || !categoria_seleccionada) {
        alert('Te falta street');
    }
});

const botones = [boton_dif_facil, boton_dif_medio, boton_dif_dificil];

let dificultad_seleccionada;
let categoria_seleccionada;

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

function decodificarHTML(texto) {
    contenedor_el_del_emdio.createElement('textarea');
    // contenedor_el_del_emdio.innerHTML = texto;
    // return contenedor_el_del_emdio.value;
}

const categorias = [{"id":1,"name": "Seleccione una categoria"}];
const m = await api.getCategorias();
const todas = categorias.concat(m);
console.log(todas);

selector_categorias.innerHTML = todas.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

selector_categorias.addEventListener('change', () => {
    categoria_seleccionada = selector_categorias.value;

    if(categoria_seleccionada === 1) {
        categoria_seleccionada.value = 9;
    }

    else {
        console.log("else");
    }
});
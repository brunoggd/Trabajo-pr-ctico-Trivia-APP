// Bruno González - Martín Baras

import TriviaAPI from "./TriviaAPI.js";
import TriviaGAME from "./TriviaGAME.js";

// const contenedor_el_del_emdio = document.querySelector('#1');
const api = new TriviaAPI();
const game = new TriviaGAME();

const contenedor_menu = document.querySelector('#contenedor-menu');

const contenedor_juego = document.querySelector('#contenedor-juego');

const contenedor_pregunta = document.querySelector('#contenedor-pregunta');

const contenedor_info = document.querySelector('#contenedor-preguntaindex-score');

const contenedor_fin_del_juego = document.querySelector('#contenedor-fin-juego');

contenedor_fin_del_juego.style.display = "none";

contenedor_juego.style.display = "none";

const boton_iniciar_juego = document.querySelector('#boton-jugar');

const titulo_dificultad = document.querySelector('#titulo-dificultad');

const boton_dif_facil = document.querySelector('#boton-dif-facil');

const boton_dif_medio = document.querySelector('#boton-dif-medio');

const boton_dif_dificil = document.querySelector('#boton-dif-dificil');

const selector_categorias = document.querySelector('#categories-group');

let boton_rta_1 = document.querySelector('#respuesta-1');

let boton_rta_2 = document.querySelector('#respuesta-2');

let boton_rta_3 = document.querySelector('#respuesta-3');

let boton_rta_4 = document.querySelector('#respuesta-4');

let boton_volver_a_jugar = document.querySelector('#boton-volver-a-jugar');

boton_iniciar_juego.addEventListener('click', async () => {
    if (dificultad_seleccionada && categoria_seleccionada) {
        // console.log(dificultad_seleccionada, categoria_seleccionada);
        contenedor_juego.style.display = "flex";
        contenedor_menu.style.display = "none";

        const preguntas = await api.getPreguntas(10, categoria_seleccionada, dificultad_seleccionada);

        game.iniciar(preguntas);

        MostrarPregunta(preguntas);
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
            dificultad_seleccionada = "easy";
        }

        else if (boton.dataset.difficulty === "Medio") {
            dificultad_seleccionada = "medium";
        }

        else {
            dificultad_seleccionada = "hard";
        }
    });
});

function decodificarHTML(texto) {
    contenedor_el_del_emdio.createElement('textarea');
    // contenedor_el_del_emdio.innerHTML = texto;
    // return contenedor_el_del_emdio.value;
}

function Mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function MostrarPregunta(preguntas) {
    const respuesta_correcta = preguntas[game.preguntaActual].correct_answer;

    const respuesta_incorrecta_1 = preguntas[game.preguntaActual].incorrect_answers[0];
    const respuesta_incorrecta_2 = preguntas[game.preguntaActual].incorrect_answers[1];
    const respuesta_incorrecta_3 = preguntas[game.preguntaActual].incorrect_answers[2];

    const respuestas = [respuesta_correcta, respuesta_incorrecta_1, respuesta_incorrecta_2, respuesta_incorrecta_3];

    Mezclar(respuestas);

    game.actualizarcontenedor(contenedor_info);

    // console.log("INDICE", game.preguntaActual);

    contenedor_pregunta.innerHTML = `<div class="wrapper custom-size-2 question-box-style">
                                        <p class="question margin-auto">
                                            ${preguntas[game.preguntaActual].question}
                                        </p>
                                    </div>
                                    <div class="wrapper fdr custom-size">
                                        <button id="respuesta-1" class="button margin-auto answer-bg-colour"><p class="question-text">${respuestas[0]}</p></button>
                                        <button id="respuesta-2"  class="button margin-auto answer-bg-colour"><p class="question-text">${respuestas[1]}</p></button>
                                        <button id="respuesta-3"  class="button margin-auto answer-bg-colour"><p class="question-text">${respuestas[2]}</p></button>
                                        <button id="respuesta-4"  class="button margin-auto answer-bg-colour"><p class="question-text">${respuestas[3]}</p></button>
                                    </div>`;

    boton_rta_1 = document.querySelector('#respuesta-1');
    boton_rta_2 = document.querySelector('#respuesta-2');
    boton_rta_3 = document.querySelector('#respuesta-3');
    boton_rta_4 = document.querySelector('#respuesta-4');

    const botones_rtas = [boton_rta_1, boton_rta_2, boton_rta_3, boton_rta_4];

    botones_rtas.forEach(boton => {
        boton.addEventListener('click', () => {
            let respuesta_elegida = boton.textContent;

            game.responder(respuesta_elegida, contenedor_info);

            if (game.haTerminado()) {
                contenedor_juego.style.display = "none";

                contenedor_fin_del_juego.style.display = "flex";

                contenedor_fin_del_juego.innerHTML = `<h2 class="main-title">¡Juego terminado!</h2>
                                                        <h2 class="main-title">Puntuación</h2>
                                                        <div class="score-container">${game.puntaje}</div>
                                                        <button id="boton-volver-a-jugar" class="play-button">Volver a jugar</button>`;


                boton_volver_a_jugar = document.querySelector('#boton-volver-a-jugar');
                boton_volver_a_jugar.addEventListener('click', () => {
                    contenedor_fin_del_juego.style.display = "none";
                    contenedor_menu.style.display = "flex";
                    titulo_dificultad.textContent = "Seleccione una dificultad";
                    dificultad_seleccionada="";
                    console.log(dificultad_seleccionada);
                    selector_categorias.value=1;
                    categoria_seleccionada=selector_categorias.value;
                    console.log(categoria_seleccionada);
                    
                });
            }

            else {
                MostrarPregunta(game.preguntas);
            }

            Mezclar(respuestas);
        });
    });
}

const categorias = [{ "id": 1, "name": "Seleccione una categoría" }];
const demas_categorias = await api.getCategorias();
const categorias_totales = categorias.concat(demas_categorias);

selector_categorias.innerHTML = categorias_totales.map(c => `<option value="${c.id}" class="selector">${c.name}</option>`).join('');

selector_categorias.addEventListener('change', () => {

    if (selector_categorias.value === "1") {
        selector_categorias.value = 9;
    }
    categoria_seleccionada = selector_categorias.value
    console.log(categoria_seleccionada)
});
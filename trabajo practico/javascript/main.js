document.addEventListener("DOMContentLoaded", async () => {
    // const contenedor_el_del_emdio = document.querySelector('#1');
    const contenedor_menu = document.querySelector('#contenedor-menu');

    const contenedor_juego = document.querySelector('#contenedor-juego');

    contenedor_juego.style.display = "none";

    const boton_iniciar_juego = document.querySelector('#boton-jugar');

    contenedor_juego.style.display = "none";
    contenedor_menu.style.display = "none";

    boton_iniciar_juego.addEventListener('click', () => {
        contenedor_juego.style.display = "flex";
        contenedor_menu.style.display = "none";
    });

    const titulo_dificultad = document.querySelector('#titulo-dificultad');

    const boton_dif_facil = document.querySelector('#boton-dif-facil');

    const boton_dif_medio = document.querySelector('#boton-dif-medio');

    const boton_dif_dificil = document.querySelector('#boton-dif-dificil');

    boton_dif_facil.onclick = function () {
        titulo_dificultad.textContent = "Dificultad: Fácil";
    }

    boton_dif_medio.onclick = function () {
        titulo_dificultad.textContent = "Dificultad: Medio";
    }

    boton_dif_dificil.onclick = function () {
        titulo_dificultad.textContent = "Dificultad: Difícil";
    }

    const botones = [boton_dif_facil, boton_dif_medio, boton_dif_dificil];

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            titulo_dificultad.textContent = boton.data.difficulty;
        });
    });

    import TriviaAPI from './TriviaAPI';

    function decodificarHTML(texto) {
        contenedor_el_del_emdio.createElement('textarea');
        // contenedor_el_del_emdio.innerHTML = texto;
        // return contenedor_el_del_emdio.value;
    }

    const trivia = new TriviaAPI();
    const preguntas = await trivia.getPreguntas();
    const categorias = await trivia.getCategorias();
});
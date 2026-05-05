document.addEventListener("DOMContentLoaded", async () =>{
    const contenedor_menu = document.querySelector('#contenedor-menu');
    
    const contenedor_juego = document.querySelector('#contenedor-juego');

    contenedor_juego.style.display = "none";

    const boton_iniciar_juego = document.querySelector('#boton-jugar');

    boton_iniciar_juego.addEventListener('click', () => {
        contenedor_juego.style.display = "flex";
        contenedor_menu.style.display = "none";
    });

    const titulo_dificultad = document.querySelector('#titulo-dificultad');

    const boton_dif_facil = document.querySelector('#boton-dif-facil');

    const boton_dif_medio = document.querySelector('#boton-dif-medio');
    
    const boton_dif_dificil = document.querySelector('#boton-dif-dificil');

    class TriviaGAME{
        constructor(){
            this.puntaje = 0;
            this.preguntaActual = 0;
        }

        async iniciar(preguntas){
            const estado = 0;
        }

        async responder(respuesta){
            // jaja salu2
        }

        async haTerminado(){
            
        }
    }
});
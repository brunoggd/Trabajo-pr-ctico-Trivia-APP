// Bruno González - Martín Baras

class TriviaGAME {
    constructor() {
        this.preguntas = [];
        this.preguntaActual = 0;
        this.puntaje = 0;

        this.aumento = 1;
    }

    iniciar(preguntas) {
        this.preguntas = preguntas;

        this.preguntaActual = 0;
        this.puntaje = 0;
    }

    getPreguntaActual() {
        return this.preguntas[this.preguntaActual];
    }

    siguiente() {
        this.preguntaActual ++;
    }

    responder(respuesta, contenedor) {
        if(respuesta === this.getPreguntaActual().correct_answer) {
            this.puntaje ++;
            this.siguiente();
            
            this.actualizarcontenedor(contenedor);

            // console.log("LA RESPUESTA ES CORRECTA!!!", "INDICE:", this.preguntaActual);
            return true;
        }

        else {
            this.siguiente();

            this.actualizarcontenedor(contenedor);

            // console.log("SOS UN MOGOLICO", "INDICE:", this.preguntaActual);
            return false;
        }
    }

    actualizarcontenedor (contenedor) {
        if (this.preguntaActual < this.preguntas.length) {
            contenedor.innerHTML = `<div id="contenedor-preguntaindex-score" class="wrapper margin-auto small-gap">
                                    <h2 class="question-title">Pregunta ${this.preguntaActual + this.aumento} de 10</h2>
                                    <h2 class="question-title">Puntuación: ${this.puntaje}</h2>
                                </div>`;
        }
    }

    haTerminado() {
        if(this.preguntaActual >= this.preguntas.length) {
            return true;
        }

        else {
            return false;
        }
    }
}

export default TriviaGAME;
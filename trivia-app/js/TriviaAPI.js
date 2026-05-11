// Bruno González - Martín Baras

class TriviaAPI {
    constructor() {
    }
    async getPreguntas(cantidad = 10, categoria = "", dificultad = "") {
        try{
        const endpoint = `https://opentdb.com/api.php?amount=${cantidad}&category=${categoria}&difficulty=${dificultad}&type=multiple`;
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Error en la API obteniendo las preguntas");
        }
        const data = await response.json();
        return data.results;}
        catch (error) { throw new Error(error); }

    }

    async getCategorias() {
        try{
        const endpoint = "https://opentdb.com/api_category.php";
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Error en la API obteniendo las categorias");
        }
        const data = await response.json();
        return data.trivia_categories;}
        catch(error){throw new Error(error)}
    }

}

export default TriviaAPI;
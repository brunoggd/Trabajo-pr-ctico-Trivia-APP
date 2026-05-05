// Bruno González - Martín Baras

class TriviaAPI {
    constructor() {
    }
    async getPreguntas(cantidad = 10, categoria = "", dificultad = "") {

        const endpoint = "https://opentdb.com/api.php?amount=10&type=multiple";
        const response = await fetch(endpoint);
        const data = await response.json();
        // console.log(data.results);
        return data.results;

    }

    async getCategorias() {
        const endpoint = "https://opentdb.com/api_category.php";
        const response = await fetch(endpoint);
        const data = await response.json();
        // console.log(data.trivia_categories);
        return data.trivia_categories;
    }

}

export default TriviaAPI;
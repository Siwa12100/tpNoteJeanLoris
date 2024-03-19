class ApiService {

    async getData(url) {
        if (typeof url !== "string") {
            throw new TypeError("L'URL fournie n'est pas du bon type.");
        }
    
        if (url.trim() === '') {
            throw new SyntaxError("L'URL fournie est vide.");
        }
    
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erreur sur GET à l'URL : ${url}`);
            }
            const data = await response.json();
            return data;    
        } catch (error) {
            console.error(`${error.name}: ${error.message}`);
            throw error; // Re-throwing the error for handling at the caller's level
        }
    }

    postData(url, data) {

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)

        }).catch((erreur) => {
            console.log(`${erreur.name} : ${erreur.message}`);
        });
    }
}

console.log("---- Tests du service ------");

const service = new ApiService();
let dataTest
let promise =  service.getData("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies").then(data => dataTest = data)
console.log("données récupérées : " + dataTest);
class ApiService {

    getData(url) {

        if (typeof(url) !== "string") {
            throw new TypeError("L'url fournie n'est pas du bon type.");
        }

        if (url === '') {
            throw new SyntaxError("L'url fournie est vide");
        }

        let dataJson = fetch(url).then((reponse) => {

            if (!reponse.ok) {
                throw new Error("Erreur sur get à l'url : " + url);
            }

            return reponse.json();

        }).catch((erreur) => {
            console.log(`${erreur.name} : ${erreur.message}`);
        });
    };

    postData(url, data) {

        fetch('https://exemple.com/api/data', {
            method: 'POST',
            body: JSON.stringify(data)

        }).catch((erreur) => {
            console.log(`${erreur.name} : ${erreur.message}`);
        });
    }
}

console.log("---- Tests du service ------");

const service = new ApiService();
let dataTest = service.getData("https://api.github.com/users/tenderlove");
console.log("données récupérées : " + dataTest);
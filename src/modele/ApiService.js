class ApiService {

    getData(url) {

        if (typeof(url) !== "string") {
            throw new TypeError("L'Url fournie n'est pas du bon type.");
        }

        if (url === '') {
            throw new SyntaxError("L'url fournie est vide");
        }

        dataJson = fetch(url).then((reponse) => {

            if (!reponse.ok) {
                throw new Error("Erreur sur get à l'url : " + url);
            }

            return reponse.json();

        }).catch((erreur) => {
            console.log(`${erreur.name} : ${erreur.message}`);
        });
    };

    postData(url, data) {

    }
}
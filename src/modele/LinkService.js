class LinkService {

    #links = []
    constructor(){
        for (let i in LINKS)
        {   
            links.push({i, label:LINKS[i].label, url:LINKS[i].url})
            //tableauLiens.push(this.creerLien(i, LINKS[i].label, LINKS[i].url))
        }
        return tableauLiens;
    }
    creerLien(id, label, lien) {
        return {
            id,
            label, 
            lien
        }
    }

    getLink(){

    }
    getLinks(){

        return this.#links
    }
}

 console.log("Test de la classe :");
 console.log(new LinkService().getLinks())
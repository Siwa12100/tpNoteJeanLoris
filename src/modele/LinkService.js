class LinkService {

    #links = []
    #nbOfLinks = 0
    constructor(links){
        for (let i in links)
        {   
            this.#links.push({id:this.#nbOfLinks++, label:links[i].label, url:links[i].url})
            //tableauLiens.push(this.creerLien(i, LINKS[i].label, LINKS[i].url))
        }
    }

    getLink(url)
    {
        return this.#links.find( element => element.lien == url )
    }

    getLinks(){

        return this.#links
    }
}

//  console.log("Test de la classe :");
//  console.log(new LinkService().getLinks())
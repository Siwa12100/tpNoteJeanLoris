class Movie {
    
    id;
    titre;
    description;
    image;
    isView;
    
    constructor(id, titre, description, image) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        if (image == undefined)
            this.image = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
        else
            this.image = image;
        this.isView = false;
    }
}


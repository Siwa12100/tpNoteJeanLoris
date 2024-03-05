class LinkService {

    creerLien(id, label, lien) {
        return {
            id,
            label, 
            lien
        }
    } 
    getLinks() {

        tableauLiens = [];
        tableauLiens.push(this.creerLien(1, "Nous contacter", "/contact"));
        tableauLiens.push(this.creerLien(2, "Nos services", "/services"));
        tableauLiens.push(this.creerLien(3, "Notre projet", "/projet"));
        tableauLiens.push(this.creerLien(4, "Notre equipe", "/equipe"));

        return tableauLiens;
    }
}
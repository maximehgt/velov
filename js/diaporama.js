/* diapo .JS
Vélo'V
Maxime HUGONNET */

// Objet diaporama
var Diaporama = {
    items : document.getElementsByClassName("item"), // Attribut de sélection des figures
    imageNum : 0, // Attribut qui permet de parcourir les images

    // Méthode qui récupére les touches du clavier et actionne le diaporama en fonction de la touche
    infosClavier : function(e) {
        if(e.keyCode === 39) {
            document.addEventListener("keydown", this.suivant()); // Appui sur la touche =>
        } else if(e.keyCode === 37) {
            document.addEventListener("keydown", this.precedent()); // Appui sur la touche <=
        }
    },

    // Méthode qui fait fonctionner le diaporama en avant
    suivant : function() {
        this.items[this.imageNum].style.opacity = "0"; // Fait disparaître l'image active
        if(this.imageNum === 4) { // Si le diaporama est à la dernière image
            this.imageNum = 0; // On repasse l'attribut à 0 pour faire réapparaître la première image
        } else { // Sinon on passe à l'image suivante
            this.imageNum++; // En augmentant de 1 l'attribut
        }
        this.items[this.imageNum].style.opacity = "1"; // Fait apparaître l'image suivante
    },

    // Méthode qui fait fonctionner le diaporama en arrière
    precedent : function() {
        this.items[this.imageNum].style.opacity = "0"; // Fait disparaître l'image active
        if(this.imageNum === 0) { // Si le diaporama est à la première image
            this.imageNum = 4; // On passe l'attribut à 4 pour faire réapparaître l'image précédente
        } else { // Sinon on passe à l'image précédente
            this.imageNum--; // En diminuant de 1 la valeur de l'attribut
        }
        this.items[this.imageNum].style.opacity = "1"; // Fait apparaître l'image précédente
    }
}

// Le bouton droit appel la méthode "suivant" du diaporama
document.getElementById("bouttonDroit").addEventListener("click", Diaporama.suivant.bind(Diaporama));

// Le bouton gauche appel la méthode "précédent" du diaporama
document.getElementById("bouttonGauche").addEventListener("click", Diaporama.precedent.bind(Diaporama));

// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", Diaporama.infosClavier.bind(Diaporama));

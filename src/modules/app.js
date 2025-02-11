import { products } from "./products.js";
import { buildProductsList } from "./ui.js";

// Fonction d'initialisation de l'application
function init() {
    buildProductsList(products); // Affiche la liste des produits au chargement
}


export { init };

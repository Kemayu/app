import { products } from "./products.js";
import { buildProductsList } from "./ui.js";
import { search } from "./products.js";

// Fonction d'initialisation de l'application
function init() {
    buildProductsList(products); // Affiche la liste des produits au chargement
    document.getElementById('product-search').addEventListener('keyup', (event)=> {
        if (event.key === 'Enter') {
            buildProductsList(search(event.target.value));
        }
    })
}



export { init };

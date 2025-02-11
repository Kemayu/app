import { products, search } from "./products.js";
import { buildProductsList, displayCart, setupEmptyCartButton } from "./ui.js";

// Fonction d'initialisation de l'application
function init() {
    buildProductsList(products); // Affiche la liste des produits au chargement
    displayCart();
    setupEmptyCartButton();
    document.getElementById('product-search').addEventListener('keyup', (event)=> {
        if (event.key === 'Enter') {
            buildProductsList(search(event.target.value));
        }
    })
}



export { init };

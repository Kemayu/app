import { products, search } from "./products.js";
import { buildProductsList, displayCart} from "./ui.js";
import {cart} from "./cart.js";

// Fonction d'initialisation de l'application
function init() {
    buildProductsList(products); // Affiche la liste des produits au chargement
    displayCart();

    document.getElementById('product-search').addEventListener('keyup', (event)=> {
        if (event.key === 'Enter') {
            buildProductsList(search(event.target.value));
        }
    })

    document.getElementById('empty-cart').addEventListener('click', ()=> {
        cart.emptyCart();
        displayCart();
    })
}



export { init };

import {cart} from "./cart.js";
function displayProduct(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <div class="photo">
            picto
            <a class="product-add2cart">
            <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <h3>${product.ref}</h3>
        <p>${product.description}</p>
        <strong>Prix : ${product.price}€</strong>
        <button class="product-addToCart">Ajouter au panier</button>

        `;
    const addToCartButton = productElement.getElementsByClassName("product-addToCart")[0];
    addToCartButton.addEventListener("click", function() {
        cart.addToCart(product); // Appeler la méthode addToCart du panier
    });

    return productElement;
}

export function buildProductsList(products) {
    const productListContainer = document.getElementById("product-list");

    if (!productListContainer) {
        console.error("Erreur : l'élément #products-list est introuvable.");
        return;
    }

    productListContainer.innerHTML = "";




    products.forEach(product => {
        const productElement = displayProduct(product);
        productListContainer.appendChild(productElement);
    });

}





import { cart } from "./cart.js";

// Affichage d'un produit dans la liste
function displayProduct(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <div class="photo">
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class="details-top">
                <strong class="bigger">${product.ref}</strong>
                <strong class="bigger">${product.price} €</strong>
            </div>
            <div class="details-description">
                ${product.description}
            </div>
        </div>
    `;

    // Ajout de l'événement pour ajouter au panier
    productElement.querySelector(".product-add2cart").addEventListener("click", () => {
        cart.addToCart(product);
        displayCart();
    });

    return productElement;
}

// Affichage de la liste des produits
export function buildProductsList(products) {
    const productListContainer = document.getElementById("product-list");

    if (!productListContainer) {
        console.error("Erreur : #product-list introuvable.");
        return;
    }

    productListContainer.innerHTML = "";

    products.forEach(product => {
        const productElement = displayProduct(product);
        productListContainer.appendChild(productElement);
    });
}

// Affichage du panier
export function displayCart() {
    const cartContent = document.getElementById("cart-content");
    const totalProductsSpan = document.getElementById("total-products");
    const cartTotalSpan = document.getElementById("cart-total");

    if (!cartContent || !totalProductsSpan || !cartTotalSpan) {
        console.error("Erreur : éléments du panier introuvables.");
        return;
    }

    const cartItems = cart.getCartItems();

    // Génération du HTML pour chaque produit dans le panier
    const cartHTML = cartItems.map(item => `
        <tr>
            <td>${item.product.ref}</td>
            <td>${item.product.description}</td>
            <td>${item.qty}</td>
            <td>${(item.product.price * item.qty).toFixed(2)} €</td>
        </tr>
    `).join("");

    // Mise à jour de l'affichage du panier
    cartContent.innerHTML = `
        <thead>
            <tr>
                <th>Réf</th>
                <th>Description</th>
                <th>Qté</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>${cartHTML}</tbody>
    `;

    // Mise à jour des totaux
    totalProductsSpan.textContent = cart.genericCalc((total, item) => total + item.qty);
    cartTotalSpan.textContent = `${cart.genericCalc((total, item) => total + (item.product.price * item.qty)).toFixed(2)} €`;
}

// Gestion du bouton "Vider le panier"
export function setupEmptyCartButton() {
    const emptyCartButton = document.getElementById("empty-cart");

    if (!emptyCartButton) {
        console.error("Erreur : Bouton 'Vider le panier' introuvable.");
        return;
    }

    emptyCartButton.addEventListener("click", () => {
        cart.emptyCart();
        displayCart();
    });
}

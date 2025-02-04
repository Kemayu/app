function displayProduct(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>Prix : ${product.price}€</strong>
    `;

    return productElement;
}

export function buildProductsList(products) {
    const productListContainer = document.getElementById("products-list");

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

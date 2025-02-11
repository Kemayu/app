(() => {
  // src/modules/products.js
  var Products = class {
    constructor(ref, price, description) {
      if (typeof ref != "string" || typeof price != "number" || typeof description != "string") {
        throw new TypeError("Ce n'est pas le bon type");
      }
      this.ref = ref;
      this.price = price;
      this.description = description;
    }
  };
  var products = [
    new Products("P1", 50, "Meilleur produit"),
    new Products("P2", 30, "Produit 2"),
    new Products("P3", 40, "Produit 3")
  ];
  function search(keywords) {
    return products.filter(
      (product) => product.ref.toLowerCase().includes(keywords.toLowerCase()) || product.description.toLowerCase().includes(keywords.toLowerCase())
    );
  }

  // src/modules/cart.js
  var Cart = class {
    constructor() {
      this.items = [];
    }
    addToCart(product) {
      const existingItem = this.items.find((item) => item.product === product);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        this.items.push({ product, qty: 1 });
      }
    }
    emptyCart() {
      this.items = [];
    }
    genericCalc(callback) {
      return this.items.reduce(callback, 0);
    }
    getCartItems() {
      return this.items;
    }
  };
  var cart = new Cart();

  // src/modules/ui.js
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
                <strong class="bigger">${product.price} \u20AC</strong>
            </div>
            <div class="details-description">
                ${product.description}
            </div>
        </div>
    `;
    productElement.querySelector(".product-add2cart").addEventListener("click", () => {
      cart.addToCart(product);
      displayCart();
    });
    return productElement;
  }
  function buildProductsList(products2) {
    const productListContainer = document.getElementById("product-list");
    if (!productListContainer) {
      console.error("Erreur : #product-list introuvable.");
      return;
    }
    productListContainer.innerHTML = "";
    products2.forEach((product) => {
      const productElement = displayProduct(product);
      productListContainer.appendChild(productElement);
    });
  }
  function displayCart() {
    const cartContent = document.getElementById("cart-content");
    const totalProductsSpan = document.getElementById("total-products");
    const cartTotalSpan = document.getElementById("cart-total");
    if (!cartContent || !totalProductsSpan || !cartTotalSpan) {
      console.error("Erreur : \xE9l\xE9ments du panier introuvables.");
      return;
    }
    const cartItems = cart.getCartItems();
    const cartHTML = cartItems.map((item) => `
        <tr>
            <td>${item.product.ref}</td>
            <td>${item.product.description}</td>
            <td>${item.qty}</td>
            <td>${(item.product.price * item.qty).toFixed(2)} \u20AC</td>
        </tr>
    `).join("");
    cartContent.innerHTML = `
        <thead>
            <tr>
                <th>R\xE9f</th>
                <th>Description</th>
                <th>Qt\xE9</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>${cartHTML}</tbody>
    `;
    totalProductsSpan.textContent = cart.genericCalc((total, item) => total + item.qty);
    cartTotalSpan.textContent = `${cart.genericCalc((total, item) => total + item.product.price * item.qty).toFixed(2)} \u20AC`;
  }
  function setupEmptyCartButton() {
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

  // src/modules/app.js
  function init() {
    buildProductsList(products);
    displayCart();
    setupEmptyCartButton();
    document.getElementById("product-search").addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        buildProductsList(search(event.target.value));
      }
    });
    document.getElementById("empty-cart").addEventListener("click", () => {
      cart.emptyCart();
      displayCart();
    });
  }

  // src/modules/main.js
  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
})();

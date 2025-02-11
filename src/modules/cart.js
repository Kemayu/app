class Cart {
    constructor() {
        this.items = [];
    }

    addToCart(product) {
        // Utilisation d'une fonction classique pour rechercher le produit dans le panier
        const existingItem = this.items.find((item) => item.product === product);

        if (existingItem) {
            // Si le produit existe déjà, on incrémente la quantité
            existingItem.qty += 1;
        } else {
            // Sinon, on l'ajoute avec une quantité de 1
            this.items.push({ product, qty: 1 });
        }
    }
}

const cart = new Cart();
cart.addToCart("P1");
export { cart };


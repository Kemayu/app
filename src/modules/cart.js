class Cart {
    constructor() {
        this.items = [];
    }

    addToCart(product) {
        // Utilisation d'une fonction classique pour rechercher le produit dans le panier
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
}

const cart = new Cart();
export { cart };

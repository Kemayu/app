class Products{
    constructor(ref, price, description){
        if(typeof ref != "string" || typeof price != "number" || typeof description != "string"){
            throw new TypeError("Ce n'est pas le bon type");
        }
        
        this.ref = ref;
        this.price = price;
        this.description = description;
    }
}
    const products = [ 
        new Products("P1", 50, "Meilleur produit"),
        new Products("P2", 30, "Produit 2"),
        new Products("P3", 40, "Produit 3")
    ];
export{products};


function search(keywords) {
    return products.filter(product =>
        product.ref.toLowerCase().includes(keywords.toLowerCase()) ||
        product.description.toLowerCase().includes(keywords.toLowerCase)
    );
}


export { search };

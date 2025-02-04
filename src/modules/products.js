class Products{
    constructor(ref, price, description){
        if(typeof ref != "string" || typeof price != 1|| typeof description != "string"){
            throw new Error("Ce n'est pas un string");
        }
        
        this.ref = ref;
        this.price = price;
        this.description = description;
    }
}
    const products = [ 
        new Products("P1", 50, "Meilleur produit"),
        new Products("P2", 30, "Produit 2")
    ];
export{products}; 
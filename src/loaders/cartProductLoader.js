import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async ()=>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products)
    
// if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    // console.log(storedCart);
    const savedCart=[];
    
    for(const id in storedCart){
        const addedProduct = products.find(pd=>pd.id ===id);
        console.log(addedProduct);
        if(addedProduct){
            const quantity = storedCart[id];
            console.log(quantity);
            addedProduct.quantity = quantity;
            console.log(addedProduct.quantity)
            console.log(addedProduct.quantity);
            savedCart.push(addedProduct);
        }

    }

    return savedCart;

}

export default cartProductLoader;
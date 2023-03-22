import { getStoredCart } from "../Utilities/fakedb";

export const productsAndCartLoader = async () => {
  // get Products
  const productsData = await fetch("http://localhost:5000/food");
  const products = await productsData.json();
  // get cart
  const savedCart = getStoredCart();
  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      console.log(id, addedProduct.quantity);
      initialCart.push(addedProduct);
    }
  }

  return { products: products, initialCart: initialCart };
};

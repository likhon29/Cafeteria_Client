import React from "react";
import Cart from "./../../Dashboard/Customer/Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../../Utilities/fakedb";
import { useState } from "react";
import ReviewItem from "./../ReviewItem/ReviewItem";
import Cart1 from "./../../Dashboard/Customer/Cart/Cart1";

const CardDetails = () => {
  const { initialCart } = useLoaderData(); // { products: products, initialCart: initialCart }
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    console.log(id);
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        <div className="flex justify-between">
          <h3 className="text-3xl my-5">My Cart</h3>
          {cart.length ? (
            <button className="btn  m-5" onClick={clearCart}>
              Clear Cart
            </button>
          ) : (
            <></>
          )}
        </div>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <div className="flex h-72 justify-center items-center">
            <h2>
              No Items for Review. Please{" "}
              <Link to="/menu">
                <span className="underline text-blue-700">Shop more</span>
              </Link>
            </h2>
          </div>
        )}
      </div>
      <div className="cart-container">
        <Cart1 clearCart={clearCart} cart={cart}></Cart1>
      </div>
    </div>
  );
};

export default CardDetails;

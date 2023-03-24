import React, { useContext, useEffect, useState } from "react";
import Item from "../Item/Item";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../../Shared/Loading/Loading";
import BuyModal from "./../BuyModal/BuyModal";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../../Utilities/fakedb";
import Cart from "./../../Dashboard/Customer/Cart/Cart";
import "./Menu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { cart, setCart } = useContext(AuthContext);
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const {
    data: foodItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["foodItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/food");
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const _id in storedCart) {
      const addedProduct = foodItems.find((product) => product._id === _id);
      if (addedProduct) {
        const quantity = storedCart[_id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [foodItems]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="shop-container">
      {/* <h1>Menu</h1>
      <img
        src="https://demo.themefisher.com/agico/images/background/banner.png"
        alt=""
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
        {foodItems.map((item) => (
          <Item
            key={item._id}
            item={item}
            handleAddToCart={handleAddToCart}
            setSelectedItem={setSelectedItem}
          ></Item>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/cardDetails">
            <button className="btn m-5">Review Order</button>
          </Link>
        </Cart>
      </div>
      {selectedItem && (
        <BuyModal
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        ></BuyModal>
      )}
    </div>
  );
};

export default Menu;

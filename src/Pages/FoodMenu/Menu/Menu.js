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
  const [foodItems, setFoodItems] = useState([]);
  const { cart, setCart, isLoading } = useContext(AuthContext);
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((response) => response.json())
      .then((data) => setFoodItems(data));
  }, []);

  const handleFoodItem = (foodItem) => {
    fetch(`http://localhost:5000/food/${foodItem}`)
      .then((response) => response.json())
      .then((data) => setFoodItems(data));
  };

  // const {
  //   data: foodItems = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["foodItems"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/food");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

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
  }, [foodItems, setCart]);

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

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.item.value;
    console.log(searchValue);
    fetch(`http://localhost:5000/food/title/${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data);
        form.reset();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="shop-container">
        <div className="">
          <div className=" flex justify-between items-center">
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
              <button
                onClick={() => handleFoodItem("")}
                type="button"
                className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-1 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
              >
                All categories
              </button>
              <button
                onClick={() => handleFoodItem("LunchItem")}
                type="button"
                className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-1 mb-3 dark:text-white dark:focus:ring-gray-800"
              >
                Lunch
              </button>
              {/* <button onClick={() => handleFoodItem("")}
                type="button"
                className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-1 mb-3 dark:text-white dark:focus:ring-gray-800"
              >
                Special Item
              </button> */}
              <button
                onClick={() => handleFoodItem("Drinks")}
                type="button"
                className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-1 mb-3 dark:text-white dark:focus:ring-gray-800"
              >
                Drinks
              </button>
              <button
                onClick={() => handleFoodItem("SnackItem")}
                type="button"
                className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              >
                Snacks
              </button>
            </div>
            <form onSubmit={handleSearch}>
              <input
                placeholder="Search Food "
                name="item"
                type="text"
                className="input m-1 w-48 input-bordered"
              />

              <input
                className="btn mx-1 my-2 btn-success"
                value="Search"
                type="submit"
              />
            </form>
          </div>
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
    </div>
  );
};

export default Menu;

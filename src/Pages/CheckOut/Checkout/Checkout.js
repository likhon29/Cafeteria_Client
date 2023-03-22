import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const products = useLoaderData();
  console.log("producys fpr, car", products);
  return <div>{/* <Cart></Cart> */}
  <h1>
    Hello form cart</h1></div>;
};

export default Checkout;

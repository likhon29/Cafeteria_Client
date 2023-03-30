import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart, children } = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let grandTotal = 0;
  if (total > 0) {
    grandTotal = total + 20;
  }

  

  return (
    <div className="cart border m-5">
      <h4 className="text-2xl mb-4">Order Summary</h4>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Items Order (Quantity)
              </th>

              <td className="px-8 py-4">{quantity} </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Subtotal (Taka)
              </th>

              <td className="px-8 py-4">{total}</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Delivery Fee (Taka)
              </th>

              <td className="px-8 py-4">{quantity ? "20.00" : "00"}</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Total (Taka)
              </th>

              <td className="px-8 py-4">{grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex">
          {cart.length ? (
            <button className="btn bg-[red]  m-5" onClick={clearCart}>
              Clear Cart
            </button>
          ) : (
            <></>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Cart;

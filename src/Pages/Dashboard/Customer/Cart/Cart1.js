import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import "./Cart.css";
import { toast } from "react-hot-toast";

const Cart1 = (props) => {
  const { user, setCart } = useContext(AuthContext);
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

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const shippingAddress = form.address.value;
    const phone = form.phone.value;
    console.log(phone);

    const orderInfo = {
      price: grandTotal,
      shippingAddress: shippingAddress,
      customerName: user.displayName,
      customerEmail: user.email,
      customerPhone: phone,
      cart,
      orderDate: new Date(),
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        clearCart();
        console.log("data",data);
        if (data.acknowledged) {
          console.log("Enter")
          // 
          //   setCart([]);
          // setIsBooked(true);
          //   navigate("/dashboard/myReservation");
          //   toast.success("Booking confirmed");
          // refetch();
        } else {
          //   toast.error(data.message);
        }
      });
  };

  return (
    <div className="cart border m-5">
      <h4 className="text-2xl mb-4">Order Summary</h4>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Items Order (Quantity)
              </th>

              <td class="px-8 py-4">{quantity} </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Subtotal (Taka)
              </th>

              <td class="px-8 py-4">{total}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Delivery Fee (Taka)
              </th>

              <td class="px-8 py-4">{quantity ? "20.00" : "00"}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Total (Taka)
              </th>

              <td class="px-8 py-4">{grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="">
          <form onSubmit={handleCheckOut}>
            <input
              placeholder="Enter Your Phone Number "
              name="phone"
              type="text"
              className="input m-1 w-80 input-bordered"
              required
            />
            <input
            required
              placeholder="Write your shipping address "
              name="address"
              type="text"
              className="input m-1 w-80 py-5  input-bordered"
            />
           
            <input 
              className="btn mx-3 my-2 btn-success" 
              disabled={grandTotal === 0 ? true : false}
              value="Place Your Order"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart1;

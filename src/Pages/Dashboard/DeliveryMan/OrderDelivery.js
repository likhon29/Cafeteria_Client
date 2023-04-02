import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const OrderDelivery = () => {
  const orderInfo = useLoaderData();
  const [deliveryMans, setDeliveryMans] = useState([]);
  const [accept, setAccept] = useState(orderInfo?.picked);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/delivery-man")
      .then((response) => response.json())
      .then((data) => setDeliveryMans(data));
  }, []);
  const handleDelivery = () => {
    console.log("clicked form");

    fetch(`http://localhost:5000/delivery-man/orders/${orderInfo._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Order Delivered Successfully");
          navigate('/dashboard/delivery-man/manage-order')
          //   refetch();
        }
      });
  };
  const acceptDelivery = (id) => {
    fetch(`http://localhost:5000/delivery-man/orders?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setAccept(true);
          toast.success("Order Picked Successfully");
          //   refetch();
        }
      });
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mx-10">
      <div className="flex justify-between">
        <h1 class="text-3xl text-center m-2 text-[green]">
          Order Delivery Details
        </h1>
        <div className="flex justify-end">
          {accept===true ? (
            <button class="bg-[#d54c16] m-2 p-2 rounded text-white">
              Accepted
            </button>
          ) : (
            <button
              class="btn btn-success text-white"
              onClick={() => acceptDelivery(orderInfo._id)}
            >
              Request Accept for Delivery
            </button>
          )}
        </div>
      </div>
      <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        {/* <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                
                
            </tr>
        </thead> */}
        <tbody>
          <tr class="bg-blue-500 border-b border-blue-400">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Order_ID
            </th>
            <td class="px-6 py-4">{orderInfo._id}</td>
          </tr>
          <tr class="bg-blue-500 border-b border-blue-400">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Transaction_ID
            </th>
            <td class="px-6 py-4">{orderInfo.transactionId}</td>
          </tr>
          <tr class="bg-blue-500 border-b border-blue-400">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Customer Name
            </th>
            <td class="px-6 py-4">{orderInfo.customerName}</td>
          </tr>
          <tr class="bg-blue-500 border-b border-blue-400">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Email
            </th>
            <td class="px-6 py-4">{orderInfo.customerEmail}</td>
          </tr>
          <tr class="bg-blue-500 border-blue-40">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Contact No
            </th>
            <td class="px-6 py-4">{orderInfo.customerPhone}</td>
          </tr>
          <tr class="bg-blue-500 border-blue-40">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Total Amount
            </th>
            <td class="px-6 py-4">{orderInfo.price} Tk</td>
          </tr>
          <tr class="bg-blue-500 border-blue-40">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              shippingAddress
            </th>
            <td class="px-6 py-4">{orderInfo.shippingAddress}</td>
          </tr>
          <tr class="bg-blue-500 border-blue-40">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Customer OTP
            </th>
            <td class="px-6 py-4">
              <input
                type="text"
                id="success"
                class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Enter Customer OTP"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center m-5">
        <button onClick={() => handleDelivery()} class="btn btn-primary ">
          Delivered
        </button>
      </div>
    </div>
  );
};

export default OrderDelivery;

import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const HandOver = () => {
  const orderInfo = useLoaderData();
  const [deliveryMans, setDeliveryMans] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/delivery-man")
      .then((response) => response.json())
      .then((data) => setDeliveryMans(data));
  }, []);
  const handleHandOver = () => {
    console.log("clicked form");
    var e = document.getElementById("deliveryMan");
    var value=e.value
    // var text = e.options[e.selectedIndex].text;
console.log(value)
    fetch(`http://localhost:5000/manager/orders?id=${orderInfo._id}&dm=${value}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Order handover to delivery man");
          //   refetch();
        }
      });
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mx-10">
      <h1 class="text-3xl text-center m-2 text-[green]">
        Order Handover to Delivery Man
      </h1>
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
              Handover To
            </th>
            <td class="px-6 py-4">
              <select
                id="deliveryMan"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option disabled selected>
                  Select a Delivery Man
                </option>
                {deliveryMans?.map((man) => (
                  <option value={man._id}>{man.name}</option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center m-5">
        <button onClick={() => handleHandOver()} class="btn btn-primary ">
          Handover
        </button>
      </div>
    </div>
  );
};

export default HandOver;

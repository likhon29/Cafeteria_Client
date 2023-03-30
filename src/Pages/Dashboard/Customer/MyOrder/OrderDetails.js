import React from "react";
import { useLoaderData } from "react-router-dom";
import ItemInfo from "./ItemInfo";
import "./OrderDetails.css";
const OrderDetails = () => {
  const orderInfo = useLoaderData();
  console.log(orderInfo);
  const order = orderInfo;
  return (
    <div>
      <section class="">
        <div class="max-w-5xl mx-auto bg-white">
          <article class="overflow-hidden">
            <div class="bg-[white] rounded-b-md">
              <div className="flex justify-between items-center">
              <h1 className="text-4xl m-5">Order#{order._id}</h1>
              <div className="flex">
                <button className="btn  mx-3">Print</button>
                <button className="btn bg-[green] mx-3">Download</button>
              </div>
              </div>
              <div class="">
                <div class="">
                  <div class="flex justify-around items-center">
                    <div class="font-light text-slate-500 m-5">
                      <p class=" font-normal text-slate-700">Invoice Detail:</p>
                      <p>{order.customerName}</p>
                      <p>{order.customerEmail}</p>
                      <p>{order.customerPhone}</p>
                      <p>{order.shippingAddress}</p>
                    </div>
                    <div class=" font-light text-slate-500">
                      <p class=" font-normal text-slate-700">Billed To</p>
                      <p>Cafeteria</p>
                      <p>Jahangirnagar University</p>
                      <p>Savar, Dhaka</p>
                      <p>+09128348742367</p>
                    </div>
                    <div class=" font-light text-slate-500">
                      <p class=" font-normal text-slate-700">Order Info:</p>
                      <p>transactionID: {order.transactionId}</p>
                      <p>Order Date: {order.orderDate}</p>
                      <p>Status: Paid</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mx-10">
                <div class="flex flex-col mx-0 my-5">
                  <table class="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 pl-4 pr-3 text-left  font-normal text-slate-700 sm:pl-6 md:pl-0"
                        >
                          Food Name
                        </th>
                        <th
                          scope="col"
                          class="hidden py-3.5 px-3 text-right  font-normal text-slate-700 sm:table-cell"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          class="hidden py-3.5 px-3 text-right  font-normal text-slate-700 sm:table-cell"
                        >
                          Rate
                        </th>
                        <th
                          scope="col"
                          class="py-3.5 pl-3 pr-4 text-right  font-normal text-slate-700 sm:pr-6 md:pr-0"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.cart &&
                        order.cart.map((item) =><ItemInfo key={item._id} item={item}></ItemInfo>)}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th
                          scope="row"
                          colspan="3"
                          class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Subtotal
                        </th>
                        <th
                          scope="row"
                          class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          Subtotal
                        </th>
                        <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          {order.price-20} Tk.
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          colspan="3"
                          class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          shipping
                        </th>
                        <th
                          scope="row"
                          class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          shipping
                        </th>
                        <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          20 Tk
                        </td>
                      </tr>
                      <tr>
                      <th
                          scope="row"
                          colspan="3"
                          class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Discount
                        </th>
                        <th
                          scope="row"
                          class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          Discount
                        </th>
                        <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          0 Tk.
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          colspan="3"
                          class="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                        >
                          Total
                        </th>
                        <th
                          scope="row"
                          class="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                        >
                          Total
                        </th>
                        <td class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                          {order.price} Tk
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default OrderDetails;

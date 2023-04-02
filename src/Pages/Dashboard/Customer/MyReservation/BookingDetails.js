import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import OrderTimeLine from "../MyOrder/OrderTimeLine";
import ItemInfo from "../MyOrder/ItemInfo";
import BookingTimeLine from "./BookingTimeLine";
const BookingDetails = () => {
  const orderInfo = useLoaderData();
  const order = orderInfo;
  console.log(order);

  return (
    <div>
      <section class="">
        <div class="max-w-5xl mx-auto ">
          <article class="overflow-hidden">
            <div class=" rounded-b-md">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl m-5">
                  <span className="font-bold text-green-400">Booking#</span>
                  {order._id}
                </h1>
                <div className="flex"></div>
              </div>
              <BookingTimeLine></BookingTimeLine>
              <div class="border m-3 bg-lime-100">
                <div class="border rounded ">
                  <div class="flex  justify-around items-center">
                    <div class="font-light text-slate-500 m-5">
                      <p class=" font-normal text-slate-700">Customer Info:</p>
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
                      <p>Order Date: {order.bookingDate}</p>
                      <p>{order.pmr ? "Status: confirm" : "Status: pending"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" mx-10">
                <div class="flex flex-col mx-0 my-5">
                  <table class="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 pl-4 pr-3 text-left  font-normal text-slate-700 sm:pl-6 md:pl-0"
                        >
                          Reservation Type
                        </th>
                        <th
                          scope="col"
                          class="hidden py-3.5 px-3 text-right  font-normal text-slate-700 sm:table-cell"
                        >
                          Slot
                        </th>
                        <th
                          scope="col"
                          class="hidden py-3.5 px-3 text-right  font-normal text-slate-700 sm:table-cell"
                        >
                          Reservation Date
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
                    <tr class="border-b border-slate-200">
      <td class="py-1 pl-4 pr-3  sm:pl-6 md:pl-0">
        <div class="font-medium text-slate-700">{order.title}</div>
        <div class="mt-0.5 text-slate-500 sm:hidden">1 unit at $0.00</div>
      </td>
      <td class="hidden px-3 py-1 text-sm text-right text-slate-500 sm:table-cell">
        {order.slot}
      </td>
      <td class="hidden px-3 py-1 text-sm text-right text-slate-500 sm:table-cell">
        {order.reservationDate} 
      </td>
      <td class="py-1 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
        {order.price} Tk.
      </td>
    </tr>
                    </tbody>
                    <tfoot>
                      
                      <tr>
                        <th
                          scope="row"
                          colspan="3"
                          class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Tax
                        </th>
                        <th
                          scope="row"
                          class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          shipping
                        </th>
                        <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          00 Tk
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
              <div className="flex justify-end m-3">
                <button className="btn btn-sm  mx-3">Print</button>
                <button className="btn btn-sm bg-[green] mx-3">Download</button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BookingDetails;

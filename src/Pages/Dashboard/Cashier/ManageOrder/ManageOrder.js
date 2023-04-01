import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const ManageOrder = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/orders/`;

  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  console.log(orders);

 
  return (
    <div className="mx-20">
      <h3 className="text-3xl mb-5">Manage Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {orders.length > 0 ? (
            <thead>
              <tr>
                <th></th>
                <th>transactionID</th>

                <th>Amount</th>
                <th>Order Date</th>
                {/* <th>Date</th> */}
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          ) : (
            <div className="flex justify-center items-center h-[200px] bg-slate-200">
              No Orders Founded 
              
            </div>
          )}
          <tbody>
            {orders &&
              orders?.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td>{order.transactionId}</td>

                  <td>{order.price} Tk.</td>
                  {/* <td>{booking.bookingDate.split('T')[0]}</td> */}
                  <td>{order?.orderDate?.split("T")[0]}</td>
                  <td>
                    {/* <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button> */}
                    {/* {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )} */}
                    {order.price && order.paid && (
                      <span className="rounded p-2 text-white bg-green-600">
                        Paid
                      </span>
                    )}
                  </td>
                  <td>
                    <Link to={`/dashboard/cashier/orders/${order._id}`}>
                      <button className="btn btn-sm">Show Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;

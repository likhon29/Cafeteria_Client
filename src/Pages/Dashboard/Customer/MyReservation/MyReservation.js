import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyReservation = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = `http://localhost:5000/reservations?email=${user?.email}`;

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

  const handleReservation = (id) => {
    console.log(id);

    fetch("http://localhost:5000/booking-payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.url);
        if (data.acknowledged) {
          // setIsBooked(true);
          // navigate("/dashboard/pa");
          // toast.success("Booking confirmed");
          // refetch();
        } else {
          // toast.error(data.message);
        }
      });
  };
  return (
    <div className="mx-10">
      <h3 className="text-3xl mb-5">My Reservation</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>

              <th>Reservation Date</th>
              <th>Booking Date</th>
              <th>Price</th>
              {/* <th>Date</th> */}
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders?.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td>{order.title}</td>
                  <td>{order.reservationDate}</td>

                  {/* <td>{booking.bookingDate.split('T')[0]}</td> */}
                  <td>{order.bookingDate}</td>
                  <td>{order.price} Tk.</td>
                  <td>
                    {/* <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button> */}
                    {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button
                          onClick={() => handleReservation(order._id)}
                          className="btn btn-primary btn-sm"
                        >
                          Pay
                        </button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-sm">X</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReservation;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BuyModal = ({ selectedItem, setSelectedItem }) => {
  console.log("Modal info", selectedItem);
  const { _id, title, price } = selectedItem;
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  //   useEffect(() => {
  //     axios
  //       .get(`https://ju-book-express-server.vercel.app/user/${user.email}`)
  //       .then((data) => setUserInfo(data.data));
  //   }, [user.email]);
  const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const orderTime = new Date();

    const OrderInfo = {
      food_id: selectedItem._id,
      itemName: selectedItem.title,
      image: selectedItem.image,
      customerName: user.displayName,
      customerEmail: email,
      customerPhone: phone,
      deliveryLocation: location,
      orderTime,

      price,
    };
    console.log(OrderInfo);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",

        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(OrderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSelectedItem(null);
          // setIsBooked(true);
          navigate("/dashboard/myOrders");
          toast.success("Order create");
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setSelectedItem(null)}
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="email"
              type="text"
              disabled
              value={user?.email}
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="email"
              disabled
              value={user?.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="itemName"
              type="text"
              defaultValue={title}
              readOnly={true}
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="price"
              defaultValue={price + " TK"}
              readOnly={true}
              className="input w-full input-bordered "
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Delivery Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyModal;

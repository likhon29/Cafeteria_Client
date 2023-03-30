import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReservationForm = ({ selectedDate }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date(selectedDate);
let day = weekday[d.getDay()];
console.log(day)
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const phone = form.phone.value;
    const reservationDate = form.reservationDate.value;
    const slot = form.slot.value;
    const price = form.price.value;
    const priceList = price.split("-");
    const bookingDate = new Date();

    const bookingInfo = {
      customerName: user.displayName,
      customerEmail: user.email,
      customerPhone: phone,
      bookingDate: convert(bookingDate),
      slot,
      reservationDate,
      title: priceList[0],
      price: priceList[1].split("/")[0],
      paid:false,
      transactionId:''
    };
    console.log(bookingInfo);

    fetch("http://localhost:5000/reservations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
       window.location.replace(data.url)
        if (data.acknowledged) {
          // setIsBooked(true);
          // navigate("/dashboard/myReservation");
          // toast.success("Booking confirmed");
          // refetch();
        } else {
        }
      });
  };

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  var date = new Date();
  const today = convert(date);
  console.log(today);
  console.log(convert(selectedDate));
  // const dateList=selectedDate.split('');
  // console.log(dateList[1])
  return (
    <div className="border  p-5">
      <h1 className="text-center text-fuchsia-800 font-bold">Reservation Form</h1>
      <form onSubmit={handleBooking} className="m-3">
        <input
          name="email"
          type="text"
          readOnly={true}
          value={user.email}
          className="input text-white w-full input-bordered m-3 bg-slate-600"
        />
        <input
          name="name"
          type="email"
          readOnly={true}
          value={user?.displayName}
          className="input text-white bg-slate-600 m-3 w-full input-bordered"
        />
        <input
          name="reservationDate"
          type="text"
          
          value={convert(selectedDate) }
          readOnly={true}
          className="input m-3 w-full input-bordered"
        />
        <div className="flex justify-between">
          <select className="m-3 w-full border p-2" name="slot" id="slot">
            {/* <option value="morning">Morning</option> */}
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
          <select className="m-3 w-full border p-2" name="price" id="price">
            <option value="Any program of any department-500/=">
              Any program of any department-500/=
            </option>
            <option value="Anyone referred. by any teacher-6000/=">
              Anyone referred. by any teacher-6000/=
            </option>
            <option value="Any relative of any teacher-4000/-">
              Any relative of any teacher-4000/=
            </option>
          </select>
        </div>

        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          className="input m-3 w-full input-bordered" required
        />
        <textarea
        required
          className="m-3 w-full border p-2"
          id="description"
          placeholder="Write details about your reservation"
          name="description"
          rows="2"
          cols="50"
        ></textarea>
        <br />
        
        
        {

          <input
          className="btn m-3 btn-accent w-full"
          type="submit"
          value="Submit"
          disabled={(day !== 'Friday' && day !== 'Saturday') ? true : false}
        />
        }
       
      </form>
    </div>
  );
};

export default ReservationForm;

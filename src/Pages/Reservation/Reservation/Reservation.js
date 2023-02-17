import React from "react";
import { useState } from "react";
import ReservationBanner from "./../ReservationBanner/ReservationBanner";

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  return (
    <div>
      <ReservationBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></ReservationBanner>
    </div>
  );
};

export default Reservation;

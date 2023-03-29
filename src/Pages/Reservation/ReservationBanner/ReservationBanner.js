import React, { useState } from "react";
import chair from "../../../Assets/img/modern-empty-cafe-restaurant_7081-1149.png";
import { DayPicker } from "react-day-picker";
import ReservationForm from "../ReservationForm/ReservationForm";

const ReservationBanner = () => {
  
  const disabledDays = [
    { from: new Date(2022, 3, 21), to: new Date() },
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col  lg:flex-row-reverse">
         
          <ReservationForm selectedDate={selectedDate}></ReservationForm>
          <div className="mr-10 border  sm:w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={disabledDays}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReservationBanner;

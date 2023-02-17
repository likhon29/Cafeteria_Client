import React from "react";
import chair from "../../../Assets/img/modern-empty-cafe-restaurant_7081-1149.png";
import { DayPicker } from "react-day-picker";

const ReservationBanner = ({ selectedDate, setSelectedDate }) => {
    const disabledDays = [
        new Date(2023, 2, 10),
        new Date(2022, 2, 12),
        new Date(2022, 2, 20),
        { from: new Date(2022, 4, 18), to: new Date(2022, 4, 29) }
      ];
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-10 border bg-amber-100 sm:w-full">
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

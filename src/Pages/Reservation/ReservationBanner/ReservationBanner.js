import React, { useState } from "react";
import chair from "../../../Assets/img/modern-empty-cafe-restaurant_7081-1149.png";
import { DayPicker } from "react-day-picker";
import ReservationForm from "../ReservationForm/ReservationForm";
import "react-day-picker/dist/style.css";
const ReservationBanner = () => {
  const disabledDays = [{ from: new Date(2022, 3, 21), to: new Date() }];
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState(tomorrow);

  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <ReservationForm selectedDate={selectedDate}></ReservationForm>
          <div className="">
            <div className="flex bg-blue-200  justify-center p-5 rounded sm:w-full">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(data) => {
                  if (data) {
                    setSelectedDate(data);
                  }
                }}
                disabled={disabledDays}
                styles={{
                  caption: { color: "green" },
                }}
              />
            </div>
            <div className="">
              {/* <h1 className="text-xl my-3">*Terms and Conditions</h1> */}
              <ul class="list-disc m-3">
                <li className="text-[red] font-bold">
                  Available on Friday and Saturday
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReservationBanner;

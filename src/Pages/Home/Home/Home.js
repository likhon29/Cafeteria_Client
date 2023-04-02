import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Faq from "../FAQ/Faq";
import Feedback from "../Feedback/Feedback";
import Special from "../Special/Special";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];
  return (
    <div className="m-5">
      <Banner></Banner>
      {dayName !== "Tuesday" && <Special></Special>}
      
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Faq></Faq>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;

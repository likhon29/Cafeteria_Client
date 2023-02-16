import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Faq from "../FAQ/Faq";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Feedback></Feedback>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;

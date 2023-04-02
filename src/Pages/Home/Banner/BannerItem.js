import React from "react";
import "./BannerItem.css";
import { Link } from "react-router-dom";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img w-full">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Jahangirnagar University <br />
          Cafeteria <br />
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/4 left-24 top-1/2">
        <p className="text-xl text-white">
          Jahangirnagar University maintains a central cafeteria for all kind of
          usage. It is behind the monument called “Omor Ekushey”. There are
          always students in the cafeteria. The cafeteria offers the students
          and teachers a healthy and fresh meal in morning and lunch time in
          very low cost. There are 29 staffs and cookers helping to serve the
          food and maintaining the menus.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <Link to='/menu'><button className="btn btn-warning mr-5">Order Food</button></Link>
        <Link to='/reservation'><button className="btn btn-outline btn-warning">Reservation</button></Link>
        
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;

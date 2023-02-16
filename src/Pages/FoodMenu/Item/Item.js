import React from "react";
import logo from "../../../Assets/img/Food/khicuri.jpg";
const Item = ({ item ,setSelectedItem }) => {
  const { title, subtitle, poster, quantity, price } = item;
  return (
    <div>
      <div className="card w-96 text-white bg-[#5f668d] shadow-xl m-5">
        <figure>
          <div className="w-100 ">
            <img src={poster} alt="Shoes" className=" h-48 w-96" />
          </div>
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{subtitle}</div>
            </h2>
            <div className="text-warning  text-2xl">{price} Tk</div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions items-center justify-between">
            <div className="badge badge-outline">{quantity} piece</div>
            <button className="btn btn-sm ">Add To Cart</button>
            <label
                htmlFor="my-modal"
                className="btn btn-sm "
                onClick={() => setSelectedItem(item)}
              >
                Order
              </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

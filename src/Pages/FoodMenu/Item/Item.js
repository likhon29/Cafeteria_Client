import React from "react";
import logo from "../../../Assets/img/Food/khicuri.jpg";
import { Link } from "react-router-dom";
const Item = ({ item, setSelectedItem, handleAddToCart }) => {
  const { title, subtitle, poster, quantities, price } = item;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
      <div className="w-100 ">
        <img src={poster} alt="Shoes" className=" h-48 w-96" />
      </div>
      <div className="px-5 pb-5">
        <Link to="" className="my-2 flex items-center justify-between">
          <h5 className="text-xl font-semibold tracking-tight text-blue-700 dark:text-white">
            {title}
          </h5>
          {subtitle=== "Regular Item" ? <div className="badge badge-secondary">{subtitle}</div> : <div className="badge badge-success">{subtitle}</div>}
          
        </Link>
     <div className="flex items-center mt-2.5 mb-5 justify-between">
     <div className="flex items-center ">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="">
          <span className="text-[green] font-bold">Available: {item.quantities} piece</span>
        </div>
     </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-orange-500 dark:text-white">
            Tk.{price}{" "}
          </span>
          <button
            onClick={() => handleAddToCart(item)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>

    // <div>
    //   {/* <div className="card w-96 text-white bg-[green] shadow-xl m-5">
    //     <figure>
    //       <div className="w-100 ">
    //         <img src={poster} alt="Shoes" className=" h-48 w-96" />
    //       </div>
    //     </figure>
    //     <div className="card-body">
    //       <div className="flex justify-between">
    //         <h2 className="card-title">
    //           {title}
    //           <div className="badge badge-secondary">{subtitle}</div>
    //         </h2>
    //         <div className="text-warning  text-2xl">{price} Tk</div>
    //       </div>
    //       <p>If a dog chews shoes whose shoes does he choose?</p>
    //       <div className="card-actions items-center justify-between">
    //         <div className="badge badge-outline">{quantities} piece</div>
    //         <button
    //           onClick={() => handleAddToCart(item)}
    //           className="btn btn-sm "
    //         >
    //           Add To Cart
    //         </button>
    //         <label
    //           htmlFor="my-modal"
    //           className="btn btn-sm "
    //           onClick={() => setSelectedItem(item)}
    //         >
    //           Details
    //         </label>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default Item;

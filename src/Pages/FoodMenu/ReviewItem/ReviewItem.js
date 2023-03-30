import React from "react";
import "./ReviewItem.css";
import { CiSquareRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { _id, title, price, quantity, poster } = product;

  return (
    <div className="review-item">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-3 py-3">
                Food Name
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>

              <th scope="col" class="px-3 py-3">
                Unit-Price
              </th>
              <th scope="col" class="px-2 py-3">
                <span class="sr-only" >
                  delete
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img src={poster} alt="" />
              </th>
              <td class="px-6 py-4">{title}</td>
              <td class="px-6 py-4">{quantity}</td>
              <td class="px-6 py-4">{price}</td>
              <td class="px-6 py-4 text-right">
                <button onClick={() => handleRemoveItem(_id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  delete 
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div>
                <img src={poster} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details flex justify-between">
                    <p>{title}</p>
                    <p><small>Price: ${price}</small></p>
                    
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                    <CiSquareRemove/>
                    </button>
                </div>
            </div> */}
    </div>
  );
};

export default ReviewItem;

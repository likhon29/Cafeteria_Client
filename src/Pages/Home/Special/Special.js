import React, { useEffect, useState } from 'react';
import SpecialItem from './SpecialItem';
import { Link } from 'react-router-dom';

const Special = () => {
    const [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/food")
          .then((response) => response.json())
          .then((data) => setFoodItems(data));
      }, []);
      const specialItems = foodItems.filter(item => item.subtitle !== 'Regular Item')
    return (
      <div className="m-5">
       <div className="flex justify-between mx-5 m-5">
       <h1 className="text-primary text-3xl font-bold">Special Item for Tuesday</h1>
        <Link to='/menu'><button
            
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Order Now
          </button></Link>
        </div> 
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
            {specialItems.map((item) => (
              <SpecialItem
                key={item._id}
                item={item}
                // handleAddToCart={handleAddToCart}
                // setSelectedItem={setSelectedItem}
              ></SpecialItem>
            ))}
          </div>
      </div>
    );
};

export default Special;
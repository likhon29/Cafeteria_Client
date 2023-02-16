import React, { useState } from "react";
import Item from "../Item/Item";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../../Shared/Loading/Loading";
import BuyModal from './../BuyModal/BuyModal';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {
    data: foodItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["foodItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/food");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {/* <h1>Menu</h1>
      <img
        src="https://demo.themefisher.com/agico/images/background/banner.png"
        alt=""
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {foodItems.map((item) => (
          <Item key={item._id} item={item} setSelectedItem={setSelectedItem}></Item>
        ))}
      </div>

      {
        selectedItem && <BuyModal selectedItem={selectedItem} setSelectedItem={setSelectedItem}></BuyModal>
      }
    </div>
  );
};

export default Menu;

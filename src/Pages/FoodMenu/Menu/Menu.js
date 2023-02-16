import React from "react";
import Item from "../Item/Item";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../../Shared/Loading/Loading";

const Menu = () => {
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
      <h1>Manu</h1>
      <img
        src="https://demo.themefisher.com/agico/images/background/banner.png"
        alt=""
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {foodItems.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Menu;

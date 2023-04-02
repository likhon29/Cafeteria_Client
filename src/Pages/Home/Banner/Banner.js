import React from "react";
import img1 from "../../../Assets/img/18303685.jpg";
import img2 from "../../../Assets/img/18303685.jpg";
import img3 from "../../../Assets/img/18303685.jpg";
import img4 from "../../../Assets/img/18303685.jpg";
import img5 from "../../../Assets/img/18303685.jpg";
import img6 from "../../../Assets/img/18303685.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image:
      "https://www.bproperty.com/blog/wp-content/uploads/2021/07/Weekend-Programme-at-Jahangirnagar-University.jpg",
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: "https://pis.juniv.edu/slide3.jpg",
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: "https://www.ekushey-tv.com/media/imgAll/2020June/JU-2203090620.jpg",
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;

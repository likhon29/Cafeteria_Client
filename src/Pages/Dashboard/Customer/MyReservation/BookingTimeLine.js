import React from "react";
import { useLoaderData } from "react-router-dom";
// import ItemInfo from "./ItemInfo";
import { useState } from "react";
const BookingTimeLine = () => {
  const orderInfo = useLoaderData();
  const order = orderInfo;
  console.log("orderinfp", order);

  return (
    <div>
      <div className="flex justify-center items-center mx-24">
        <div className="flex justify-between items-center">
          <div className="flex-col items-center justify-center">
            <img
              className="mt-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
              alt=""
              width="30px"
            />
            <span className="-mr-12">Pending</span>
          </div>
          <div className="bg-success h-0.5 w-[100px] mx-2"></div>
          <div className="flex-col items-center justify-center mt-5">
            {order.pmr === false && (
              <>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/1200px-Small-dark-green-circle.svg.png"
                  alt=""
                  width="30px"
                />

                <span className="-mr-12">Confirmed</span>
              </>
            )}
          </div>
        </div>

        {order.pmr && (
          <div className="flex justify-between items-center">
            <div className="flex-col items-center justify-center">
              <img
                className="mt-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
                alt=""
                width="30px"
              />
              <span className="-mr-12">Confirmed</span>
            </div>
            <div className="bg-success h-0.5 w-[100px] mx-2"></div>
            <div className="flex-col items-center justify-center mt-5">
              {order.processed === false && (
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/1200px-Small-dark-green-circle.svg.png"
                    alt=""
                    width="30px"
                  />

                  <span className="-mr-12">Booked</span>
                </>
              )}
            </div>
          </div>
        )}

        {order.processed && (
          <div className="flex justify-between items-center">
            <div className="flex-col items-center justify-center">
              <img
                className="mt-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
                alt=""
                width="30px"
              />
              <span className="-mr-12">Booked</span>
            </div>
          </div>
        )}
        {/* 
        {order.picked && (
          <div className="flex justify-between items-center">
            <div className="flex-col items-center justify-center">
              <img
                className="mt-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
                alt=""
                width="30px"
              />
              <span className="-mr-12">Picked</span>
            </div>
            <div className="bg-success h-0.5 w-[100px] mx-2"></div>
            <div className="flex-col items-center justify-center mt-5">
              {order.shifted === false && (
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/1200px-Small-dark-green-circle.svg.png"
                    alt=""
                    width="30px"
                  />

                  <span className="-mr-12">Shifted</span>
                </>
              )}
            </div>
          </div>
        )} */}

        {order.picked && (
          <div className="flex justify-between items-center">
            <div className="flex-col items-center justify-center">
              <img
                className="mt-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
                alt=""
                width="30px"
              />
              <span className="-mr-12">Picked</span>
            </div>
            <div className="bg-success h-0.5 w-[100px] mx-2"></div>
            <div className="flex-col items-center justify-center mt-5">
              {order.delivered === false && (
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Small-dark-green-circle.svg/1200px-Small-dark-green-circle.svg.png"
                    alt=""
                    width="30px"
                  />

                  <span className="-mr-12">Delivered</span>
                </>
              )}
            </div>
          </div>
        )}

        {order.delivered && (
          <div className="flex justify-between items-center">
            <div className="flex-col items-center justify-center">
              <img
                className="mt-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
                alt=""
                width="30px"
              />
              <span className="-mr-12">Delivered</span>
            </div>
          </div>
        )}
        {/* 
       
     
        {order.shift && (
          <div className="flex justify-between items-center">
            <div className="flex-col items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
                alt=""
                width="30px"
              />
              <span className="-mr-12">Picked</span>
            </div>
            <div className="bg-success h-0.5 w-[100px] mx-2"></div>
          </div>
        )}
        {order.delivered && (
          <div className="flex  items-center">
            <div className="flex-col items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Circle-green.svg/768px-Circle-green.svg.png"
                alt=""
                width="30px"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
                alt=""
                width="30px"
              />
              <span className="-mr-12">Shipped</span>
            </div>
            <div className="bg-success h-0.5 w-[100px]"></div>
          </div>
        )} */}
        {/* <div className="flex justify-between items-center">
          <div className="flex-col items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
              alt=""
              width="30px"
            />
            <span className="-mr-12">Delivered</span>
          </div>
        </div> */}
      </div>
      {/* <div className="">
        <h1 className="text-xl m-5 font-bold  text-[orange]">Order Timeline</h1>
      </div> */}
    </div>
  );
};

export default BookingTimeLine;

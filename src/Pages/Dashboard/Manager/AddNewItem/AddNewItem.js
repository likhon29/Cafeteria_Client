import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "./../../../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const AddNewItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  // 
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const handleAddItem = (data) => {
    console.log(data);
    const image = data.poster[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const foodInfo = {
            title: data.title,
            subtitle: data.subtitle,
            price: data.price,
            type: data.type,
            poster: imgData.data.url,
            quantities: 200,
          };
          fetch("http://localhost:5000/add-food", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(foodInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("save", data);
              toast("Item added Successfully.");
              navigate("/dashboard/manager/manageItem");
            });
        }
      });
  };
  return (
    <div className=" w-3/4 mx-auto m-5 bg-slate-300">
      <div className="mx-auto p-7 border">
        <h2 className="text-xl text-center">Add a new Food Item</h2>

        <form onSubmit={handleSubmit(handleAddItem)}>
          <div className="form-control ">
            <label className="label">
              {" "}
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter Food Title"
              {...register("title", {
                required: "Title is Required",
              })}
              className="input-bordered input  w-full p-2"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {" "}
              <span className="label-text">Select a subtitle</span>
            </label>
            <select
              {...register("subtitle")}
              className="input-bordered input  w-full p-2"
              defaultValue={"Regular Item"}
            >
              <option value="Regular Item">Regular Item</option>
              <option value="Special Item">Special Item</option>
            </select>
          </div>

          <div>
            <label className="label">
              {" "}
              <span className="label-text">Type</span>
            </label>
            <select
              {...register("type")}
              className="input-bordered input  w-full p-2"
              defaultValue={"LunchItem"}
            >
              <option value="LunchItem">Lunch Item</option>
              <option value="Drinks">Drinks</option>
              <option value="SnackItem">Snack Item</option>
              <option value="Breakfast">Breakfast</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div className="form-control">
              <label className="label">
                {" "}
                <span className="label-text">Food Price</span>
              </label>
              <input
                placeholder="Price"
                type="text"
                {...register("price", {
                  required: "Price is required",
                })}
                className="input-bordered input  w-full p-2"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                {" "}
                <span className="label-text">Photo</span>
              </label>
              <input
                className="input-bordered input  w-full p-2"
                type="file"
                {...register("poster", {
                  required: "Photo is Required",
                })}
              />
              {errors.poster && (
                <p className="text-red-500">{errors.poster.message}</p>
              )}
            </div>
          </div>

          <input
            className="btn btn-accent w-full mt-4"
            value="Add Food Item"
            type="submit"
          />
          {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;

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
  const { createUser, updateUser } = useContext(AuthContext);

  const [signUpError, setSignUPError] = useState("");
  const [userImg, setUserImg] = useState("");
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const handleSignUp = (data) => {
    console.log(data);
    const image = data.image[0];

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
          setUserImg(imgData.data.url);
          const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            photo: imgData.data.url,
            role: data.role,
          };
          setSignUPError("");
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              const updateUserInfo = {
                displayName: data.name,
                photoURL: imgData.data.url,
              };

              updateUser(updateUserInfo)
                .then(() => {
                  fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log("save", data);

                      navigate("/dashboard/adminPanel");
                    });
                })
                .catch((error) => console.log(error));
              toast("User Created Successfully.");
            })
            .catch((error) => {
              console.log(error);
              setSignUPError(error.message);
            });
        }
      });
  };
  return (
    <div className=" w-3/4 mx-auto m-5 bg-slate-300">
      <div className="mx-auto p-7 border">
        <h2 className="text-xl text-center">Add a new Food Item</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Food Title"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input-bordered input  w-full p-2"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is Required",
              })}
              className="input-bordered input  w-full p-2"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              placeholder="Enter a strong password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input-bordered input  w-full p-2"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="form-control">
              <label className="label">
                {" "}
                <span className="label-text">Photo</span>
              </label>
              <input
                className="input-bordered input  w-full p-2"
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                {" "}
                <span className="label-text">Phone Number</span>
              </label>
              <input
                placeholder="Phone Number"
                type="text"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="input-bordered input  w-full p-2"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label className="label">
                {" "}
                <span className="label-text">Select a role</span>
              </label>
              <select
                {...register("role")}
                className="input-bordered input  w-full p-2"
                defaultValue={"student"}
              >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="cashier">Cashier</option>
                <option value="deliveryMan">Delivery Man</option>
              </select>
            </div>
          </div>

          <input
            className="btn btn-accent w-full mt-4"
            value="Create Account"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;

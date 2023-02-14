import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
const Signup = () => {
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
            photo: imgData.data.url,
            customerType: data.customerType,
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

                      navigate("/");
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
    <div className="h-[700px] flex justify-center items-center ">
      <div className="w-100 p-7 border">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs my-5">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
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
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <select
              {...register("customerType")}
              className="select select-bordered w-full max-w-xs mt-3"
              defaultValue={"student"}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="stuff/others">Stuff/Others</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input input-bordered w-full max-w-xs p-2"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="pt-3">
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
        {/* <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button> */}
      </div>
    </div>
  );
};

export default Signup;

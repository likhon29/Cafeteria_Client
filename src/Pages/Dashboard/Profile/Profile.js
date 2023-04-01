import React, { useContext, useEffect, useState } from "react";
import logo from "../../../Assets/img/jut.webp";
import icon from "../../../Assets/img/avt-img.jpg";
import axios from "axios";
import { AuthContext } from "./../../../Contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${user.email}`)
      .then((data) => setUserInfo(data.data));
  }, [user.email]);
  console.log(userInfo);
  return (
    <div className="flex justify-center m-3">
      <div className="rounded-3xl overflow-hidden  shadow-2xl w-2/3  my-15 ">
        <img src={logo} className="w-full h-64" alt="" />
        <div className="flex justify-center -mt-8">
          <img
            src={user.photoURL}
            className="rounded-full border-solid w-1/5 border-primary border-2 -mt-3"
            alt=""
          />
        </div>
        <div className="text-right">
          <button className="btn btn-sm m-3 -mt-10">Edit Profile</button>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Full Name:
              </th>

              <td class="px-8 py-4"> {user.displayName}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Email:
              </th>

              <td class="px-8 py-4">{user.email}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Mobile No:
              </th>

              <td class="px-8 py-4">{user.Phone ? user.phone : "N/A"}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Department
              </th>

              <td class="px-8 py-4">
                {userInfo?.customerType && userInfo.customerType}
              </td>
            </tr>
          </tbody>
        </table>

        <p class="text-center m-2 text-green-800">
          Copyright (c), Jahangirnagar University
        </p>
        {/* <div className="text-center px-3 pb-6 pt-2">
          <div className="flex justify-center">
            {" "}
            <h3 className="text-white text-2xl bold uppercase font-sans mx-1">
              {user.displayName}
            </h3>
            {userInfo.status === "Verified" && (
              <img
                src="https://e7.pngegg.com/pngimages/605/284/png-clipart-check-mark-computer-icons-green-tick-miscellaneous-angle-thumbnail.png"
                width="30px"
                alt=""
              />
            )}
          </div>
          <p>{user.email}</p>
          <h2 className="mt-2 uppercase text-3xl text-danger">
            {userInfo.role}
          </h2>
        </div>
        <div className="flex justify-center pb-3 text-white">
          <div className="text-center mr-3 border-r pr-3">
            <h2>34</h2>
            <span>Photos</span>
          </div>
          <div className="text-center">
            <h2>42</h2>
            <span>Friends</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;

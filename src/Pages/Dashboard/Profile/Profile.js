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
    <div className="flex justify-center">
      <div className="rounded-3xl overflow-hidden  shadow-2xl w-2/3  my-15 bg-blue-500">
        <img src={logo} className="w-full" alt="" />
        <div className="flex justify-center -mt-8">
          <img
            src={user.photoURL}
            className="rounded-full border-solid w-1/5 border-primary border-2 -mt-3"
            alt=""
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;

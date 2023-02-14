import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1 className="text-3xl">Profile:{user?.displayName}</h1>
    </div>
  );
};

export default Profile;

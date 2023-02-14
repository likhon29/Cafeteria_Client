import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const [googleUserEmail, setGoogleUserEmail] = useState("");
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  
  const handleGoogleSIgnIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        setGoogleUserEmail(user.email);
        const userInfo = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          role: "buyer",
        };

        
        navigate(from, { replace: true });
        toast.success("Welcome to Ju Book Express...");
      })
      .catch((err) => console.error(err));
  };


 
  return (
    <div className="btn btn-outline w-full">
      <p className="text-center">
        <button onClick={handleGoogleSIgnIn} className="btn btn-ghost">
          Continue with Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
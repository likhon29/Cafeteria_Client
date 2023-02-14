import React from "react";
import { useContext } from "react";
import { AuthContext } from "./../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../../../Assets/img/JU_logo.png";
const Navbar2 = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/about">About US</Link>
      </li>
      <li>
        <Link to="/reservation">Reservation</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar 	md:px-10 lg:px-15  flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="flex   items-center lg:mx-20 md:mx-10">
          <img src={logo} alt="" className="w-1/5 mx-5" />
          <span className="text-[blue] text-2xl  ">Cafeteria</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <Link to="/dashboard">
              <img
                src="https://media.istockphoto.com/id/898295684/vector/shopping-cart-icon-silhouette-2.jpg?s=170667a&w=0&k=20&c=wpjwuU3dJ_iI6rq4q0uHqYzXmEWU4nZATgpEBI2m-cY="
                className="rounded-full  m-3  border-2"
                alt=""
                width="45px"
              />
            </Link>
            <Link to="/profile">
              {user.photoURL ? (
                <div className="flex items-center justify-center">
                  <img
                    src={user.photoURL}
                    className="rounded-full border-solid  border-primary border-2"
                    alt=""
                    width="55px"
                  />
                  
                  <div className="pr-4">
                   <img
                    src="https://static.thenounproject.com/png/551749-200.png"
                    className=""
                    alt=""
                    width="20px"
                  />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <img
                    src="https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png"
                    className="rounded-full border-solid  border-primary m-2"
                    alt=""
                    width="40px"
                  />
                </div>
              )}
            </Link>

            <button onClick={handleLogOut}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar2;

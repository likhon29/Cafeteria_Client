import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
// import useSeller from "../../Hooks/useSeller";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Navbar2 from "./../../Pages/Shared/Navbar/Navbar2";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  //   const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="drawer drawer-mobile drawer-end">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-cyan-50 text-black ">
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard">Profile</Link>
                </li>
              
                <li>
                  <Link to="/dashboard/allCustomer">All Customer</Link>
                </li>
                <li>
                  <Link to="/dashboard/adminPanel">Admin Panel</Link>
                </li>
                <li>
                  <Link to="/dashboard/reportedItem">Manage Item</Link>
                </li>
              </>
            ) : (
              <>
                <>
                <li>
                  <Link to="/dashboard">Profile</Link>
                </li>
                  <li>
                    <Link to="/dashboard/myOrders">My Orders</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myWishLists">My WishLists</Link>
                  </li>
                </>
                {/* {isSeller ? (
                  <>
                    <li>
                      <Link to="/dashboard/addProduct">Add a Product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myProducts">My Products</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myBuyers">My Buyers</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/dashboard/myOrders">My Orders</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myWishLists">My WishLists</Link>
                    </li>
                  </>
                )} */}
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoardLayout;

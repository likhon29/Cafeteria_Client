import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
// import useSeller from "../../Hooks/useSeller";
import Footer from "../../Pages/Shared/Footer/Footer";
// import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Navbar2 from "./../../Pages/Shared/Navbar/Navbar2";
import useCustomer from "./../../Hooks/useCustomer";
import useManager from "./../../Hooks/useManager";
import useCashier from "./../../Hooks/useCashier";
import useDeliveryMan from "./../../Hooks/useDeliveryMan";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isCustomer] = useCustomer(user?.email);
  const [isManager] = useManager(user?.email);
  const [isCashier] = useCashier(user?.email);
  const [isDeliveryMan] = useDeliveryMan(user?.email);

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div>
      <Navbar2></Navbar2>
      <div className=" drawer drawer-mobile drawer-end">
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
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/profile">Profile</NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/allCustomer">All Customer</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/adminPanel">Admin Panel</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reportedItem">Manage Item</NavLink>
                </li>
              </>
            )}
            {isCustomer && (
              <>
                <li>
                  <NavLink to="/dashboard/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myOrders">My Orders</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myReservation"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    My Reservation
                  </NavLink>
                </li>
              </>
            )}
            {isCashier && (
              <>
                <li>
                  <NavLink to="/dashboard/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myOrders">Manage Order</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myWishLists">Payments</NavLink>
                </li>
              </>
            )}
            {isManager && (
              <>
                <li>
                  <NavLink to="/dashboard/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myOrders">Manage Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myWishLists">
                    Manage Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myWishLists">
                    Manage FoodItems
                  </NavLink>
                </li>
              </>
            )}
            {isDeliveryMan && (
              <>
                <li>
                  <NavLink to="/dashboard/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myOrders">Delivery Items</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myWishLists">Payments</NavLink>
                </li>
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

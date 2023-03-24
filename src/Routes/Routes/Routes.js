import { createBrowserRouter } from "react-router-dom";
import Reservation from "../../Pages/Reservation/Reservation/Reservation";
import Main from "./../../Layout/Main/Main";
import Login from "./../../Pages/Authentication/Login/Login";
import SignUp from "./../../Pages/Authentication/SignUp/SignUp";
import Home from "./../../Pages/Home/Home/Home";
import Menu from "./../../Pages/FoodMenu/Menu/Menu";
import About from "./../../Pages/Home/About/About";
import Gallery from "./../../Pages/Home/Gallery/Gallery";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import Profile from "../../Pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./../AdminRoute/AdminRoute";
import DisplayError from "./../../Pages/Shared/DisplayError/DisplayError";
import DashBoardLayout from "./../../Layout/DashBoardLayout/DashBoardLayout";
import AdminPanel from "./../../Pages/Dashboard/Admin/AdminPanel/AdminPanel";
import AddAdmin from "../../Pages/Dashboard/Admin/AddAdmin/AddAdmin";
import AllCustomer from "./../../Pages/Dashboard/Customer/AllCustomer/AllCustomer";
import ManageItem from "../../Pages/Dashboard/Admin/ManageItem/ManageItem";
import MyOrder from "../../Pages/Dashboard/Customer/MyOrder/MyOrder";
import Checkout from "../../Pages/CheckOut/Checkout/Checkout";
import { productsAndCartLoader } from "./../../Loaders/ProductsAndCartLoader";
import CardDetails from "./../../Pages/FoodMenu/CardDetails/CardDetails";
import MyReservation from "../../Pages/Dashboard/Customer/MyReservation/MyReservation";
import PaymentSuccess from "../../Pages/Dashboard/Customer/MyOrder/PaymentSuccess";
import ManageOrders from "../../Pages/Dashboard/Manager/ManageOrders/ManageOrders";
import AddNewItem from './../../Pages/Dashboard/Manager/AddNewItem/AddNewItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/reservation",
        element: (
          <PrivateRoute>
            <Reservation></Reservation>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu",
        element: <PrivateRoute>
        <Menu></Menu>
      </PrivateRoute>,
      },
      {
        path: "/cardDetails",
        loader: () => productsAndCartLoader(),
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/review",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/payment/success",
        element: <PaymentSuccess></PaymentSuccess>,
      },

      {
        path: "/dashboard/myReservation",
        element: <MyReservation></MyReservation>,
      },

      {
        path: "/dashboard/adminPanel",
        element: (
          <AdminRoute>
            <AdminPanel></AdminPanel>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allCustomer",
        element: (
          <AdminRoute>
            <AllCustomer></AllCustomer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allOrders",
        element: (
          <AdminRoute>
            <AllCustomer></AllCustomer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageItem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adminPanel/addNewUser",
        element: (
          <AdminRoute>
            <AddAdmin></AddAdmin>
          </AdminRoute>
        ),
      },
      {
        path:"/dashboard/manageOrders",
        element: (
          // <ManagerRoute></ManagerRoute>
          <ManageOrders></ManageOrders>
        )
      },
      {
        path:"/dashboard/allCustomers",
        element: (
          // <ManagerRoute></ManagerRoute>
          <AllCustomer></AllCustomer>
        )
      },
      {
        path: "/dashboard/manager/manageItem",
        element: (
          
            <ManageItem></ManageItem>
          
        ),
        children:[
          {
            
          }
        ]
      },
      {
        path: "/dashboard/manager/manageItem/addNewItem",
        element: (
          
            <AddNewItem></AddNewItem>
          
        ),
      }
      
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;

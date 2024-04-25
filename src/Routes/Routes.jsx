import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Home from "../Layout/Home/Home";
import Profile from "../components/Profile/Profile";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import UserDashboard from "../components/UserDashboard/UserDashboard";

export const  router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children :[
      {
        path : "/",
        element : <Navigate to="/signup"></Navigate>
      },
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path: 'signup',
        element : <SignUp></SignUp>
      },
      {
        path : 'resetpassword',
        element : <ResetPassword></ResetPassword>
      }
    ]
  },
  {
    path :"home",
    element : <PrivateRoute><Home></Home></PrivateRoute>,
    children : [
      {
        path : 'admindashboard',
        element : <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
      },
      {
        path : 'userdashboard',
        element : <UserDashboard></UserDashboard>
      },
      {
        path : 'profile',
        element : <Profile></Profile>
      }
    ]
  }
]);

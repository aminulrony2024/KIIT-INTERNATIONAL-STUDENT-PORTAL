import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../Layout/Home/Home";
import Profile from "../components/Profile/Profile";

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
        path : 'dashboard',
        element : <Dashboard></Dashboard>
      },
      {
        path : 'profile',
        element : <Profile></Profile>
      }
    ]
  }
]);

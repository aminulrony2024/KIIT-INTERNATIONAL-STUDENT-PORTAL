import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";

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
      }
    ]
  },
  {
    path :"dashboard",
    element : <Dashboard></Dashboard>
  }
]);

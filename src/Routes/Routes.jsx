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
import UserDocuments from "../components/UserDocuments/UserDocuments";
import UploadDocument from "../components/UploadDocument/UploadDocument";
import ViewDocument from "../components/ViewDocument/ViewDocument";
import UpdateDocument from "../components/UpdateDocument/UpdateDocument";
import Faq from "../components/Faq/Faq";
import AllUsers from "../components/AllUsers/AllUsers";

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
      },
      {
        path : 'userdocuments',
        element : <UserDocuments></UserDocuments>,
        children : [
          {
            path : 'upload',
            element : <UploadDocument></UploadDocument>
          },
          {
            path : 'view',
            element : <ViewDocument></ViewDocument>
          },
          {
            path : 'update',
            element : <UpdateDocument></UpdateDocument>
          }
        ]
      },
      {
        path : 'faq',
        element : <Faq></Faq>
      },
      {
        path : 'user/:id',
        element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);

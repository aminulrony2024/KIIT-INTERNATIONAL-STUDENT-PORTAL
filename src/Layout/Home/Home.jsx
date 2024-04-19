import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="grid grid-cols-12"> 
          <div className="hidden lg:flex lg:col-span-2 lg:fixed lg:top-16">
            <Sidebar></Sidebar>
          </div>
          <div className="col-span-12 lg:col-span-10 ml-3 mt-2 lg:ml-52 lg:mt-20">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

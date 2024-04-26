import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="grid">
          <div className="hidden lg:flex lg:fixed lg:top-16">
            <Sidebar></Sidebar>
          </div>
          <div className="ml-3 mt-2 lg:ml-52 lg:mt-20 min-h-screen">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
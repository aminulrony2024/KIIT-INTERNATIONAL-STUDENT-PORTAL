import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1> Welcome, {user?.displayName}</h1>
            <p>Your Email : {user?.email}</p>
            <Link to="profile">go to profile</Link>
            {
                user?.emailVerified && <p>Your are a verified user</p>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
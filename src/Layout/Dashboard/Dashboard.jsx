import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1> Welcome, {user?.displayName}</h1>
            <p>Your Email : {user?.email}</p>
            {
                user?.emailVerified && <p>Your are a verified user</p>
            }
        </div>
    );
};

export default Dashboard;
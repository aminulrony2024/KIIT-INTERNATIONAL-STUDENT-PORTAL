import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>I am from profile</h1>
        </div>
    );
};

export default Profile;
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const Profile = () => {
    const {user} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin();
    return (
        <div>
            <h1>{user?.displayName}</h1>
            <p>{isAdmin}</p>
            {
                isAdmin && <p>You are an admin</p>
            }
        </div>
    );
};

export default Profile;
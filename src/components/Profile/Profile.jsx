import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const Profile = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <h1 className="text-2xl font-medium pb-2 border-b border-[#ccc] max-w-5xl">
        My Profile
      </h1>
      {isAdmin ? (
        //profile part for admin
        <div className="max-w-3xl mx-auto">
          <h1>{user?.displayName}</h1>
          <p>You are an admin</p>
        </div>
      ) : (
        //profile for normal user
        <div className="max-w-3xl mx-auto">
          <h1>{user?.displayName}</h1>
          <p>You are not an admin</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

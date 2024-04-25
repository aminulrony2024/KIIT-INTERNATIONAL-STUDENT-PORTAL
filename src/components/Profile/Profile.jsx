import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const Profile = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <div>
      {isAdmin ? (
        <>
          <h1>{user?.displayName}</h1>
          <p>You are an admin</p>
        </>
      ) : (
        <>
          <h1>{user?.displayName}</h1>
          <p>You are not an admin</p>
        </>
      )}
    </div>
  );
};

export default Profile;

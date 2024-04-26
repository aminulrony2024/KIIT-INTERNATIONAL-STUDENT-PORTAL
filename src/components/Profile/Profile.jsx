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
        <div className="max-w-3xl mx-auto lg:text-center">
          <form className="mt-3 lg:mt-8 space-y-7">
            <div>
            <label htmlFor="name" className="font-medium mr-2">Name <span className="text-red-600">*</span></label>
            <input type="text" name="name" className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555]"/>
            </div>
            <div>
            <label htmlFor="email" className="font-medium mr-2">Email <span className="text-red-600">*</span></label>
            <input type="email" name="email" className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555]"/>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;

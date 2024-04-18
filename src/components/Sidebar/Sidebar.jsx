import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { logOut, setLoading, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  const navList = (
    <>
      <li>
        <Link to="dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="profile">My profile</Link>
      </li>
      <li>
        <button onClick={handleLogOut}>Log Out</button>
      </li>
    </>
  );
    return (
        <div className="bg-[#2C333A] text-[#eaeaea] list-none p-2.5 block h-screen p-0 w-full">
            {navList}
        </div>
    );
};

export default Sidebar;
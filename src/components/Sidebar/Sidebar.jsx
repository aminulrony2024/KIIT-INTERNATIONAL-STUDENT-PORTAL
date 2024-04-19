import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  const { logOut, setLoading } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  const navList = (
    <ul className="space-y-2 divide-y ">
      <li>
        <Link className="flex gap-1 mt-1 p-2" to="dashboard">
          <TbLayoutDashboard className="mt-1 size-5" />
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="flex gap-1 p-2" to="profile">
          <CgProfile className="mt-1 size-5" />
          My profile
        </Link>
      </li>
      <li>
        <button className="flex gap-1 p-2" onClick={handleLogOut}>
          <RiLogoutCircleRLine className="mt-1 size-5" />
          Log Out
        </button>
      </li>
    </ul>
  );
  return (
    <div className="bg-[#2C333A] text-[#eaeaea] list-none  h-screen w-[180px]">
      {navList}
    </div>
  );
};

export default Sidebar;

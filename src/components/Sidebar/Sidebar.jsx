import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  const { logOut, setLoading } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  const navList = (
    <ul className="space-y-2 divide-y">
      <li>
        {isAdmin ? (
          <Link className="flex gap-1 mt-1 p-2" to="admindashboard">
            <TbLayoutDashboard className="mt-1 size-5" />
            Dashboard
          </Link>
        ) : (
          <Link className="flex gap-1 mt-1 p-2" to="userdashboard">
            <TbLayoutDashboard className="mt-1 size-5" />
            Dashboard
          </Link>
        )}
      </li>
      <li>
        <Link className="flex gap-1 p-2" to="profile">
          <CgProfile className="mt-1 size-5" />
          My profile
        </Link>
      </li>
      {!isAdmin && (
        <li>
          <Link className="flex gap-1 p-2" to="userdocuments">
            <IoDocumentsSharp className="mt-1 size-5" />
            My Documents
          </Link>
        </li>
      )}
      {!isAdmin && (
        <li>
          <Link className="flex gap-1 p-2" to="faq">
            <FaQuestionCircle className="mt-1 size-5" />
            FAQ
          </Link>
        </li>
      )}
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

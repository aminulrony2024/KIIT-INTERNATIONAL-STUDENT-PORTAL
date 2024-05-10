import { Link } from "react-router-dom";
import kiitlogo from "../../assets/images/KIIT Silver jubilee logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import { IoDocumentsSharp } from "react-icons/io5";
const Navbar = () => {
  const [isAdmin] = useAdmin();
  const { logOut, setLoading, user } = useContext(AuthContext);
  const username = user.displayName;
  const userNameFirstPart = username.split(" ")[0];
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
        {isAdmin ? (
          <Link to="admindashboard">
            <TbLayoutDashboard className="size-5" />
            Dashboard
          </Link>
        ) : (
          <Link to="userdashboard">
            <TbLayoutDashboard className="size-5" />
            Dashboard
          </Link>
        )}
      </li>
      <li>
        <Link to="profile">
          <CgProfile className="size-5" />
          My profile
        </Link>
      </li>
      {!isAdmin && (
        <li>
          <Link to="userdocuments">
            <IoDocumentsSharp className="size-5" />
            My Documents
          </Link>
        </li>
      )}
      {!isAdmin && (
        <li>
          <Link to="faq">
            <FaQuestionCircle className="size-5" />
            FAQ
          </Link>
        </li>
      )}
      <li>
        <button onClick={handleLogOut}>
          <RiLogoutCircleRLine className="size-5" />
          Log Out
        </button>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-12 drop-shadow-lg lg:fixed lg:z-10 max-w-screen-xl">
      <div className="navbar-start">
        <Link to="/">
          <img
            className="max-h-12 ml-2"
            src={kiitlogo}
            alt="kiit silver jubilee logo"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          <div className="hidden lg:flex pr-4 text-base font-semibold">
            <Link to="profile" className="flex gap-2">
              <FaUserCircle className="size-6" />
              {username}
            </Link>
          </div>
          <ul className="menu menu-horizontal text-base	font-medium	 px-1 lg:hidden">
            <li>
              <details>
                <summary className="border-x-2 rounded-none">
                  Welcome
                  <br />
                  {userNameFirstPart}
                </summary>
                <ul className="p-2 bg-base-100">{navList}</ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

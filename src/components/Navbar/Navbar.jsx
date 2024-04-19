import { Link } from "react-router-dom";
import kiitlogo from "../../assets/images/KIIT Silver jubilee logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Navbar = () => {
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
          <div className="hidden lg:flex pr-4 text-base font-semibold	">
            <p>Welcome {username}</p>
          </div>
          <ul className="menu menu-horizontal text-base	font-medium	 px-1 lg:hidden">
            <li>
              <details>
                <summary>
                  Welcome<br />
                  {userNameFirstPart}
                </summary>
                <ul className="p-2 bg-[#eaeaea]">{navList}</ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

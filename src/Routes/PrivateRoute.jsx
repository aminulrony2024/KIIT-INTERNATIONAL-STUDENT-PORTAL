import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) 
  return <span className="loading loading-dots loading-lg"></span>;
  if (user?.email) return children;
  return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>;
};

export default PrivateRoute;
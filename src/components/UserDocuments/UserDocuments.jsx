import { NavLink, Navigate, Outlet } from "react-router-dom";
import "./UserDocuments.css";
const UserDocuments = () => {
  return (
    <div>
      <Navigate to="/home/userdocuments/view"></Navigate>
      <h1 className="text-2xl font-medium pb-2 border-b border-[#ccc] max-w-5xl">
        My Documents
      </h1>
      <div className="mb-10 lg:mb-16">
      <ul className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-14 lg:gap-5">
        <li><NavLink to="upload" className="text-[#337ab7] font-medium text-2xl py-4 px-5 bg-[#fff] border rounded-sm border-[#00000066]">Upload Documents</NavLink></li>
        <li><NavLink to="view" className="text-[#337ab7] font-medium text-2xl py-4 px-5 bg-[#fff] border rounded-sm border-[#00000066]">View Documents</NavLink></li>
        <li><NavLink to="update" className="text-[#337ab7] font-medium text-2xl py-4 px-5 bg-[#fff] border rounded-sm border-[#00000066]">Update Documents</NavLink></li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default UserDocuments;

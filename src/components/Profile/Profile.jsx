import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
const Profile = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [phone, setPhone] = useState();
  return (
    <div>
      <h1 className="text-2xl font-medium pb-2 border-b border-[#ccc] max-w-5xl">
        My Profile
      </h1>
      {isAdmin ? (
        //profile for admin
        <div className="max-w-3xl mx-auto">
          <h1>{user?.displayName}</h1>
          <p>You are an admin</p>
        </div>
      ) : (
        //profile for normal user
        <div className="max-w-3xl mx-auto">
          <form className="mt-3 mb-6 lg:mt-8 space-y-5 lg:space-y-7 lg:text-center">
            <div>
              <label htmlFor="name" className="font-medium mr-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] inline"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium mr-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555]"
              />
            </div>
            <div>
              <label htmlFor="text" className="font-medium mr-2">
                Nationality <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="nationality"
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] lg:mr-10"
              />
            </div>
            <div>
              <label htmlFor="text" className="font-medium mr-2">
                Mobile Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="mobilenumber"
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] lg:mr-20"
              />
            </div>
            <div>
              <label htmlFor="text" className="font-medium mr-2">
                Program <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="program"
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] lg:mr-7"
              />
            </div>
            <div>
              <label htmlFor="text" className="font-medium mr-2">
                Department <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="department"
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] lg:mr-14"
              />
            </div>
            <div>
              <label htmlFor="text" className="font-medium mr-2">
                Session <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="session"
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] lg:mr-5"
              />
            </div>
            <input type="submit" value="Update" className="bg-[#75b740] text-[#fff] text-base font-normal py-2 px-3 cursor-pointer rounded w-36" />
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;

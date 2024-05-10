import { NavLink, Navigate, Outlet, useParams } from "react-router-dom";
import "./User.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { IoEye } from "react-icons/io5";

const User = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: user = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${id}`);
      return res.data;
    },
  });

  const showDocument = (doc) => {
    window.open(
      `http://localhost:5000/UserDocuments/${doc}`,
      "_blank",
      "noreferrer"
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-start gap-10">
      <div>
        <h1 className="text-2xl font-medium pb-2 border-b text-[#D11F51]">
          Student's Details :
        </h1>
        <div className="text-[#333] text-lg font-medium space-y-5 mt-2">
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Nationality : {user.nationality}</p>
          <p>Contact No : {user.mobilenumber}</p>
          <p>Program : {user.program}</p>
          <p>Department : {user.department}</p>
          <p>Roll : {user.roll}</p>
          <p>Session : {user.session}</p>
        </div>
      </div>
      <div className="lg:text-center lg:ml-32">
        <h1 className="text-2xl font-medium pb-2 text-[#D11F51]">
          Student's Documents :
        </h1>
        <div className="mt-4 lg:mt-8 ml-4 space-y-10">
          <p className="text-[#333] text-lg font-medium">
            Photo{" "}
            <button
              onClick={() => showDocument(user.image)}
              className="ml-5 btn btn-success bg-[#75b740] border-none cursor-pointer text-lg text-white px-7"
            >
              View <IoEye className="mt-1 size-5" />
            </button>
          </p>
          <p className="text-[#333] text-lg font-medium">
            Passport{" "}
            <button
              onClick={() => showDocument(user.passport)}
              className="ml-5 btn btn-success bg-[#75b740] border-none cursor-pointer text-lg text-white px-7"
            >
              View <IoEye className="mt-1 size-5" />
            </button>
          </p>
          <p className="text-[#333] text-lg font-medium">
            Visa{" "}
            <button
              onClick={() => showDocument(user.visa)}
              className="ml-5 btn btn-success bg-[#75b740] border-none cursor-pointer text-lg text-white px-7"
            >
              View <IoEye className="mt-1 size-5" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;

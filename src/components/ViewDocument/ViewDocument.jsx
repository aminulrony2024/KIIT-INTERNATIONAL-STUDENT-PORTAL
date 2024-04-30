import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { IoEye } from "react-icons/io5";

const ViewDocument = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: User = {}, refetch } = useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
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
    <div>
      <h1 className="text-2xl font-medium pb-2 border-b border-[#ccc] max-w-5xl text-[#D11F51]">
        View your document
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-around mt-10 gap-8 lg:gap-0">
        <p className="text-[#333] text-lg font-medium">
          Photo{" "}
          <button
            onClick={() => showDocument(User.image)}
            className="ml-5 btn btn-success bg-[#75b740] border-none cursor-pointer text-lg text-white px-7"
          >
            View <IoEye className="mt-1 size-5" />
          </button>
        </p>
        <p className="text-[#333] text-lg font-medium">
          Passport{" "}
          <button
            onClick={() => showDocument(User.passport)}
            className="ml-5 btn btn-success bg-[#75b740] border-none cursor-pointer text-lg text-white px-7"
          >
            View <IoEye className="mt-1 size-5" />
          </button>
        </p>
        <p className="text-[#333] text-lg font-medium">
          Visa{" "}
          <button
            onClick={() => showDocument(User.visa)}
            className="ml-5 btn btn-success bg-[#75b740] border-none cursor-pointer text-lg text-white px-7"
          >
            View <IoEye className="mt-1 size-5" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default ViewDocument;

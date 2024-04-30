import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const UpdateDocument = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [passport, setPassport] = useState("");
  const [image, setImage] = useState("");
  const [visa, setVisa] = useState("");
  const updateData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    formData.append("passport", passport);
    formData.append("visa", visa);
    formData.append("image", image);
    const result = await axiosSecure.put(
      `http://localhost:5000/update-files/${user?.email}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result?.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your document updated successfully!",
        showConfirmButton: false,
        timer: 2500,
      });
      form.reset();
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-medium pb-2 border-b border-[#ccc] max-w-5xl text-[#D11F51]">
        Update your document
      </h1>
      <form
        className="text-[#333] text-lg	font-normal space-y-3 mt-5"
        onSubmit={updateData}
      >
        <div className="flex gap-2">
          <label htmlFor="">
            1. Update your photo :<span className="text-red-600">*</span>
          </label>{" "}
          <br />
          <input
            className="text-base font-thin"
            name="image"
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            2. Update your passport :<span className="text-red-600">*</span>
          </label>{" "}
          <br />
          <input
            className="text-base font-thin"
            type="file"
            accept="application/pdf"
            required
            onChange={(e) => setPassport(e.target.files[0])}
          />
        </div>
        <div className="flex gap-2 mb-4">
          <label htmlFor="">
            3. Update your Indian visa :<span className="text-red-600">*</span>
          </label>{" "}
          <br />
          <input
            className="text-base font-thin"
            type="file"
            accept="application/pdf"
            required
            onChange={(e) => setVisa(e.target.files[0])}
          />
        </div>
        <button className="btn btn-success bg-[#75b740] border-none cursor-pointer text-white px-10">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateDocument;

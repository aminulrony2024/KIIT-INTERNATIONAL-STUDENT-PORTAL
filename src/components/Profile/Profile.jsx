import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import "react-phone-input-2/lib/style.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Profile = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();
  const { data: User = {}, refetch } = useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });
  console.log(User);
  const handleProfileUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const nationality = form.nationality.value;
    const mobilenumber = form.mobilenumber.value;
    const department = form.department.value;
    const program = form.program.value;
    const roll = form.roll.value;
    const session = form.session.value;
    const updatedUserData = {
      name,
      nationality,
      mobilenumber,
      program,
      department,
      roll,
      session,
    };
    axiosSecure.patch(`/user/${User._id}`, updatedUserData).then((res) => {
      console.log(res.data);
      refetch();
    });
  };
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
          <form
            onSubmit={handleProfileUpdateUser}
            className="mt-3 mb-6 lg:mt-8 space-y-5 lg:space-y-7 lg:text-center"
          >
            <div>
              <label htmlFor="name" className="font-medium mr-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={User.name}
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
                defaultValue={User.email}
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
                defaultValue={User.nationality}
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
                defaultValue={User.mobilenumber}
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
                defaultValue={User.program}
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
                defaultValue={User.department}
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] lg:mr-14"
              />
            </div>
            <div>
              <label htmlFor="text" className="font-medium mr-2">
                Roll <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="roll"
                defaultValue={User.roll}
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555]"
              />
            </div>
            <div>
              <label htmlFor="text" className="font-medium mr-2">
                Session <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="session"
                defaultValue={User.session}
                className="w-full lg:w-3/5 h-10 py-1.5 px-3 border border-solid border-[#ccc] rounded text-[#555] lg:mr-5"
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="bg-[#75b740] text-[#fff] text-base font-normal py-2 px-3 cursor-pointer rounded w-36"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;

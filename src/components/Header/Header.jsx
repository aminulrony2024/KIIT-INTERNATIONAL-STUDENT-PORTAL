import kiit25thLogo from "../../assets/images/KIIT Silver jubilee logo.png";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-white to-[#5ad18a] drop-shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between p-7">
        <div className="mx-auto">
          <img
            className="max-w-80"
            src={kiit25thLogo}
            alt="kiit logo 25th silver jubilee"
          />
        </div>
        <div className="font-medium flex flex-col gap-2 text-center">
          <h1 className="text-2xl">KIIT University</h1>
          <h1 className="text-2xl">International Student Portal</h1>
          <h2 className="text-lg">(For International Students)</h2>
        </div>
        <div className="mx-auto space-y-3">
          <p className="flex flex-row text-xl">
            <FaSquarePhone className="mt-1" />{" "}
            <span className="font-medium ml-2">Call Us :</span>
            <a className="text-black hover:text-blue-700" href="tel:+91 62 9021 9676">
              +91-6290219676
            </a>
          </p>
          <p className="flex flex-row text-xl">
            <MdEmail className="mt-1" />{" "}
            <span className="font-medium ml-2">Contact Us :</span>
            <a
              className="text-black hover:text-blue-700"
              href="mailto:internationaloffice@kiit.ac.in"
            >
              internationaloffice@kiit.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

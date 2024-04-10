import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [error,setError] = useState(false);
    const [password, setPassword] = useState('');
    const [kiitMail,setKiitMail] = useState(true);
    const [passEqual, setPassEqual] = useState(false);
    const kiitMailCheck = e => {
        const mail = e.target.value.split("@");
        const mailLastPart = mail[mail.length - 1];
        if(mailLastPart === 'kiit.ac.in')
        {
            setKiitMail(true);
        }
        else
        {
            setKiitMail(false);
        }
    }
    const passwordCheck =(e)=>{
        setPassword(e.target.value);
    }
    const passMatchCheck = e => {
        const confirmPassword = e.target.value;
        if(password === confirmPassword)
        {
            setError(false);
            setPassEqual(true);
        }
        else
        {
            setError(true);
            setPassEqual(false);
        }
    }
  return (
    <div className="bg-gradient-to-r from-[#62d189] to-sky-300 m-4">
          <form className="card-body">
            <h1 className="text-center text-2xl text font-bold text-white pb-2">Sign Up Now!</h1>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name *"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input onChange={kiitMailCheck}
                type="email"
                name="email"
                placeholder="Enter your KIIT email *"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="password *"
                className="input input-bordered"
                required
                onBlur={passwordCheck}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="confirmpassword"
                placeholder="confirm password *"
                className="input input-bordered"
                required
                onChange={passMatchCheck}
              />
            </div>
            {
                error && <p className="text-center text-red-600">Password didnt match.</p>
            }
            {
                !kiitMail && <p className="text-center text-red-600">Use your kiit mail id only.</p>
            }
            <div className="form-control mt-6">
              <button disabled={!(kiitMail && passEqual)} className="btn btn-primary bg-sky-500 bg-gradient-to-r from-sky-500 to-blue-700 border-none text-white text-xl">Register</button>
            </div>
            <p className="text-center">Already have an account? <Link to="/login">Log in</Link></p>
          </form>
        </div>
  );
};

export default SignUp;

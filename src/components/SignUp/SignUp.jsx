import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [passMatch, setPassMatch] = useState(false);
    const [password, setPassword] = useState('');
    const passwordCheck =(e)=>{
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const passMatchCheck = e => {
        const confirmPassword = e.target.value;
        if(password === confirmPassword)
        setPassMatch(true);
        else
        setPassMatch(false);
    }
  return (
    <div className="bg-gradient-to-r from-[#62d189] to-sky-300 m-4">
          <form className="card-body">
            <h1 className="text-center text-2xl text font-bold text-white pb-2">Sign Up Now!</h1>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Enter your name *"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Enter your email *"
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
                onChange={passwordCheck}
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
            <div className="form-control mt-6">
              <button disabled={!passMatch} className="btn btn-primary bg-sky-500 bg-gradient-to-r from-sky-500 to-blue-700 border-none text-white text-xl">Register</button>
            </div>
            <p className="text-center">Already have an account? <Link to="/login">Log in</Link></p>
          </form>
        </div>
  );
};

export default SignUp;

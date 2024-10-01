import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("test123@gmail.com");
  const [password, setPassword] = useState("Dhathri@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:80/login", {
        emailId,
        password,
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              value={emailId}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmailId(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              value={password}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={() => handleLogin()}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

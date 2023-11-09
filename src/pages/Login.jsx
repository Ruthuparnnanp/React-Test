import React, { useEffect, useState } from "react";
import loginSvg from "../assets/Login.gif";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {
    fetch("https://api.denzo.io/api/cus/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: "+918086808680",
        password: "123456",
        store_id: "10",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  },[]);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  return (
    <>
      <div className="wrapper overflow-hidden bg-slate-100 w-full h-screen flex flex-col ">
        <div
          style={{ flex: 1 }}
          className="container  flex flex-col justify-center  items-center     mx-auto"
        >
          <p className="text-center border-b-4 border-emerald-400 rounded pb-2 font-bold text-3xl mt-5 f mb-5">
            <span className="text-emerald-600">Welcome</span>
          </p>

          <div className="wrapper bg-white sm:flex-row flex-col flex gap-5 sm:gap-10 max-w-3xl p-10  shadow-2xl mx-auto  rounded">
            <img src={loginSvg} className="mx-auto" width="250px" alt="" />

            <div className="mx-auto login   sm:p-10  max-w-lg">
              <div className="flex gap-2 bg-gray-100 p-2 mb-3 items-center rounded">
                <i
                  className={`fa-solid ml-3 fa-envelope ${
                    isEmailFocused && "text-green-500"
                  }`}
                ></i>
                <input
                  className={`p-2 bg-transparent appearance-none leading-tight w-full ${
                    isEmailFocused && "placeholder-transparent"
                  }  rounded  outline-none focus:outline-none focus:shadow-outline`}
                  value={email}
                  onBlur={handleEmailBlur}
                  onFocus={handleEmailFocus}
                  onChange={handleEmailChange}
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-2 bg-gray-100 p-2 mb-5 items-center rounded">
                <i
                  className={`fa-solid  ml-3 fa-lock ${
                    isPasswordFocused && "text-green-500"
                  }`}
                ></i>
                <input
                  className={`p-2 bg-transparent  w-full ${
                    isPasswordFocused && "placeholder-transparent"
                  } rounded  outline-none`}
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  onFocus={handlePasswordFocus}
                  type="text"
                  placeholder="Enter your password"
                />
              </div>

              <button
                onClick={() => navigate("/canteen")}
                className="px-8 hover:bg-green-500 font-bold f py-2 tracking-wide bg-green-400 rounded w-full mb-1"
              >
                LOGIN
              </button>
              <p className="mt-1">
                Don't have an account ?{" "}
                <span className="text-blue-300 hover:text-blue-400 font-bold cursor-alias">
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

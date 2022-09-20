import React from "react";
import { GrCheckbox, GrEmergency } from "react-icons/gr";

function LoginPage() {
  return (
    <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9 drop-shadow-2xl">
      <h1 className="self-center mb-5 text-2xl font-bold">LOGIN</h1>
      <div className="p-5 font-semibold border-2 ">
        <div className="flex flex-col">
          <label className="flex">
            Username or email address
            <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="email"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
        </div>
        <div className="flex flex-col mt-4">
          <label className="flex">
            Password <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="password"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
          <h3 className="flex mt-4">
            <GrCheckbox className="mt-1 mr-2" /> Remember me
          </h3>
          <button className="self-start px-8 py-2 mt-2 text-white bg-red-400 rounded">
            Login
          </button>
          <h3 className="mt-4 text-red-500">Lost Your Password ?</h3>
          <h3 className="text-red-500 ">New User ? SIGN UP </h3>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

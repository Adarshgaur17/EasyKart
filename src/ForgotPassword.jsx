import React from "react";
import { GrEmergency } from "react-icons/gr";
function ForgotPassword() {
  return (
    <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9 drop-shadow-2xl">
      <div className="p-5 font-semibold border-2 ">
        <h1 className="text-gray-700">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </h1>
        <div className="flex flex-col mt-8">
          <label className="flex">
            Username or email address
            <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="email"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
          <button className="self-start px-8 py-2 mt-2 text-white bg-red-400 rounded">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;

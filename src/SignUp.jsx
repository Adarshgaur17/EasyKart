import React from "react";
import { Link } from "react-router-dom";
import { GrEmergency } from "react-icons/gr";
function SignUp() {
  return (
    <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9 drop-shadow-2xl">
      <h1 className="self-center mb-5 text-2xl font-bold">SignUp</h1>
      <div className="p-5 font-semibold border-2 ">
        <div className="flex flex-col">
          <label className="flex">
            First Name
            <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="text"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
        </div>
        <div className="flex flex-col mt-4">
          <label className="flex">
            Last Name <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="text"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
        </div>
        <div className="flex flex-col mt-4">
          <label className="flex">
            Contact No. <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="tel"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
        </div>
        <div className="flex flex-col mt-4">
          <label className="flex">
            Email address
            <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="email"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
        </div>
        <div className="flex flex-col mt-4">
          <label className="flex">
            Set Password <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="password"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
        </div>
        <div className="flex flex-col mt-4">
          <label className="flex">
            Confirm Password
            <GrEmergency className="mt-1 text-xs text-red-500" />
          </label>
          <input
            type="password"
            className="mt-2 placeholder-gray-500 border-2 "
          ></input>
        </div>
        <button className="self-start px-8 py-2 mt-2 text-white bg-red-400 rounded">
          SignUp
        </button>

        <h3 className="text-red-500 ">
          Already a user ?
          <Link to="/loginPage/" className="underline underline-offset-2">
            LOGIN
          </Link>
        </h3>
      </div>
    </div>
  );
}
export default SignUp;

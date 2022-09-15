import React from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="p-10 bg-white">
        <img
          className="object-cover w-full h-full drop-shadow-2xl"
          src="https://media.istockphoto.com/photos/internet-page-not-found-hand-with-magnifier-concept-picture-picture-id1207750534"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="mt-10 text-xl font-bold text-gray-500 ">
            We're sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <Link to="/">
            <FcHome className="mt-2 text-7xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;

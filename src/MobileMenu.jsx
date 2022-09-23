import React from "react";
import { Link } from "react-router-dom";
import { HiUserAdd, HiLockOpen } from "react-icons/hi";
function MobileMenu() {
  return (
    <div>
      <Link to="/signUpPage/" className="flex text-xl font-bold text-gray-500">
        <HiLockOpen className="text-2xl text-orange-400" /> Signup
      </Link>
      <Link to="/loginPage/" className="flex text-xl font-bold text-gray-500">
        <HiUserAdd className="text-2xl text-orange-400" /> Login
      </Link>
    </div>
  );
}
export default MobileMenu;

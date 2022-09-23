import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag, HiUserAdd, HiLockOpen } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
function Heading({ productCount }) {
  const [menu, setMenu] = useState(false);
  function handleMenuClick() {
    setMenu(!menu);
  }
  return (
    <div className="py-8 mb-4 bg-white border border-gray-300 ">
      <div className="flex justify-between max-w-6xl mx-auto">
        <Link to="/">
          <img
            className="h-16"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
          />
        </Link>
        <div className="flex items-center">
          <div className="flex invisible md:visible">
            <Link
              to="/signUpPage/"
              className="flex text-2xl font-bold text-gray-500"
            >
              <HiLockOpen className="text-4xl text-orange-400" /> Signup
            </Link>
            <Link
              to="/loginPage/"
              className="flex text-2xl font-bold text-gray-500"
            >
              <HiUserAdd className="text-4xl text-orange-400" /> Login
            </Link>
          </div>
          <GiHamburgerMenu
            onClick={handleMenuClick}
            className="text-3xl text-orange-400 md:hidden"
          />
          {menu && <MobileMenu className="md:hidden" />}
          <Link to="/CartPage/">
            <HiShoppingBag className="text-5xl text-orange-400" />
          </Link>
          <span className="-m-7">{productCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;

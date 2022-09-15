import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
function Heading({ productCount }) {
  console.log("count", productCount);
  return (
    <div className="py-8 mb-4 bg-white border border-gray-300">
      <div className="flex justify-between max-w-6xl mx-auto">
        <img
          className="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
        />
        <div className="flex flex-col items-center ">
          <Link to="/CartPage/">
            {" "}
            <HiShoppingBag className="text-6xl text-orange-400" />{" "}
          </Link>
          <span className="-m-8">{productCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;

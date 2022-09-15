import React from "react";
import CartRow from "./CartRow";
import { Link } from "react-router-dom";
import { HiArrowCircleLeft } from "react-icons/hi";
function CartList() {
  return (
    <div className="flex flex-col max-w-6xl py-16 mx-auto my-16 bg-white px-9">
      <Link to="/">
        {" "}
        <HiArrowCircleLeft className="text-4xl text-gray-600" />
      </Link>
      <div className="flex gap-40 mt-4 bg-gray-100 border-2 ">
        <h1 className="text-2xl font-bold">Product</h1>
        <h1 className="text-2xl font-bold">Price</h1>
        <h1 className="text-2xl font-bold">Quantity</h1>
        <h1 className="text-2xl font-bold">Subtotal</h1>
      </div>
      <div>
        <CartRow />
        <CartRow />
        <div className="p-4 border-2">
          <input
            className="mt-2 font-bold border-2"
            placeholder="Coupon code"
          />
          <button className="px-8 py-1 mt-2 ml-4 text-white bg-red-400 rounded">
            {" "}
            APPLY COUPON{" "}
          </button>
          <button className="px-8 py-1 mt-2 ml-4 font-bold text-black bg-red-300 rounded">
            {" "}
            UPDATE CART{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartList;

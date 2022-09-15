import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
function CartRow() {
  return (
    <div className="flex items-center gap-20 p-4 border-2">
      <TiDeleteOutline className="text-4xl text-gray-400 " />
      <div className="w-20 ">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg"
        />
      </div>
      <h2 className="text-xl font-bold text-red-600">
        black printed coffee mug
      </h2>
      <h4 className="text-xl font-bold">Rs.15</h4>
      <h4 className="box-border w-12 h-8 px-2 text-xl font-bold border-2">2</h4>
      <h4 className="text-xl font-bold ">Rs.30</h4>
    </div>
  );
}
export default CartRow;
//{thumbnail, title, price, quantity, price, id}

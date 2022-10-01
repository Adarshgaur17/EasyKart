import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
function CartRow({ product, quantity }) {
  return (
    <div className="flex flex-row items-center gap-20 p-4 border-2">
      <TiDeleteOutline className="text-4xl text-gray-400 " />
      <div className="w-20">
        <img className="object-cover w-full h-full" src={product.thumbnail} />
      </div>
      <h2 className="text-xl font-bold text-red-600 grow">{product.title}</h2>
      <h4 className="w-20 text-xl font-bold">${product.price}</h4>
      <input
        className="box-border w-12 h-8 px-2 text-xl font-bold border-2"
        type="number"
        value={quantity}
      >
        2
      </input>
      <h4 className="w-20 text-xl font-bold ">${product.price * quantity}</h4>
    </div>
  );
}
export default CartRow;

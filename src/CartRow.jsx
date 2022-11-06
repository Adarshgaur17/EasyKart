import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
function CartRow({ product, quantity, onQuantityChange, onRemove }) {
  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }
  function handleCrossClick() {
    onRemove(product.id);
  }
  return (
    <div className="flex flex-row items-center px-4 py-2 space-x-4 border-2">
      <span>
        <TiDeleteOutline
          onClick={handleCrossClick}
          className="text-4xl text-gray-400 cursor-pointer"
        />
      </span>
      <div className="w-20">
        <img className="object-cover w-full h-full" src={product.thumbnail} />
      </div>
      <h2 className="text-xl font-bold text-red-600 grow">{product.title}</h2>
      <h4 className="w-20 text-xl font-bold ">${product.price}.00</h4>
      <div className="w-32">
        <input
          className="box-border w-12 h-8 px-2 text-xl font-bold border-2"
          type="number"
          value={quantity}
          onChange={handleChange}
        />
      </div>
      <h4 className="w-20 text-xl font-bold ">
        ${product.price * quantity}.00
      </h4>
    </div>
  );
}
export default CartRow;

import React, { useState, useEffect } from "react";
import CartRow from "./CartRow";
import Button from "./Button";

function CartList({ products, cart, updateCart }) {
  const [localCart, setLocalCart] = useState(cart);
  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );
  function handleQuantityChange(productId, newValue) {
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }
  function handleUpdateCartClick() {
    updateCart(localCart);
  }
  function handleRemove(productId) {
    const newCart = { ...cart };
    delete newCart[productId];
    updateCart(newCart);
  }
  return (
    <div className="flex flex-col max-w-6xl py-16 mx-auto my-16 bg-white px-9">
      <div className="flex gap-40 mt-4 bg-gray-100 border-2">
        <span className="text-2xl font-bold ml-28 grow">Product</span>
        <span className="text-2xl font-bold w-28">Price</span>
        <span className="w-32 text-2xl font-bold">Quantity</span>
        <span className="w-20 text-2xl font-bold">Subtotal</span>
      </div>
      {products.map(function (p) {
        return (
          <CartRow
            key={p.id}
            product={p}
            quantity={localCart[p.id]}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        );
      })}

      <div className="p-4 border-2">
        <Button onClick={handleUpdateCartClick}>UPDATE CART</Button>
      </div>
    </div>
  );
}
export default CartList;

import React from "react";
import CartList from "./CartList";

function CartPage() {
  return (
    <div className="flex flex-col max-w-6xl py-16 mx-auto my-16 bg-white px-9">
      <CartList products={products} cart={cart} />
    </div>
  );
}
export default CartPage;

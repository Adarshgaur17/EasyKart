import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import Loading from "./Loading";
import { getProductData } from "./api";
import { Link } from "react-router-dom";
import { HiArrowCircleLeft } from "react-icons/hi";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      const productIds = Object.keys(cart);
      const myProductPromises = productIds.map(function (id) {
        return getProductData(id);
      });

      Promise.all(myProductPromises).then(function (products) {
        setProducts(products);
        setLoading(false);
      });
    },
    [cart]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col max-w-6xl py-16 mx-auto my-16 bg-white px-9">
      <Link to="/">
        <HiArrowCircleLeft className="text-4xl text-gray-600" />
      </Link>
      <CartList products={products} cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default CartPage;

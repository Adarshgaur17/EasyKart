import React from "react";
import Product from "./Product";
function ProductList({ products }) {
  return (
    <div className="grid-cols-3 gap-2 mt-8 space-y-2  sm:grid">
      {products.map(function (item) {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
}
export default ProductList;

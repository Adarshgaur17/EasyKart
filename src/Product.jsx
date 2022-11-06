import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, price, id }) {
  return (
    <Link to={"/Discription/" + id}>
      <div className="max-w-xs drop-shadow-2xl">
        <div className="w-full aspect-square ">
          <img className="object-cover w-full h-full" src={thumbnail} />
        </div>
        <h3 className="text-xs text-gray-500 ">{category} </h3>
        <h1 className="text-xl ">{title}</h1>
        <h1 className="font-bold"> ${price} </h1>
      </div>
    </Link>
  );
}
export default Product;

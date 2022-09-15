import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";

function Discription({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      });
      p.catch(function () {
        setLoading(false);
      });
    },
    [id]
  );
  function handleCountIinitial() {
    setCount(1);
  }

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9 drop-shadow-2xl">
      <Link to="/">
        {" "}
        <HiArrowCircleLeft className="pt-2 ml-6 text-5xl text-gray-600" />
      </Link>
      <div className="gap-6 p-10 sm:flex ">
        <div className="drop-shadow-2xl">
          <img src={product.thumbnail} />
        </div>

        <div>
          <h1 className="text-xl font-bold"> {product.title} </h1>
          <h1 className="font-bold"> {product.price} </h1>
          <p>{product.description}</p>
          <div className="flex gap-4">
            <input
              className="box-border w-12 h-10 pl-2 mt-2 border-2 border-gray-300"
              value={count}
              type="number"
              onChange={handleCountChange}
            />
            <button
              className="px-8 py-2 mt-2 text-white bg-red-400 rounded"
              onClick={handleButtonClick}
            >
              {" "}
              ADD TO CART{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-8 text-4xl text-gray-63400">
        <div>
          {id > 1 && (
            <Link onClick={handleCountIinitial} to={"/Discription/" + (id - 1)}>
              {" "}
              <HiArrowCircleLeft />{" "}
            </Link>
          )}
        </div>
        <div>
          <Link onClick={handleCountIinitial} to={"/Discription/" + (id + 1)}>
            {" "}
            <HiArrowCircleRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Discription;

import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getProductList } from "./api";
import Loading from "./Loading";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const xyz = getProductList();

    xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });
  if (sort == "high") {
    data.sort(function (x, y) {
      return x.price > y.price ? -1 : 1;
    });
  } else if (sort == "title") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == "low") {
    data.sort(function (x, y) {
      return x.price > y.price ? 1 : -1;
    });
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }
  function handleSort(event) {
    setSort(event.target.value);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9">
      <div className="justify-between sm:flex">
        <input
          className="font-bold border-2 rounded-md"
          value={query}
          placeholder="Search"
          onChange={handleQuery}
        />
        <select
          value={sort}
          onChange={handleSort}
          className="px-1 mt-2 border-2 rounded-md"
        >
          <option value="default">Default Sort</option>
          <option value="title">Sort by title</option>
          <option value="high">Sort by Price: high to low</option>
          <option value="low">Sort by Price: low to high</option>
        </select>
      </div>
      {data.length > 0 && <ProductList products={data} />}
      {data.length == 0 && (
        <NoMatching>
          No Matching Product Found, Try Searching Something Else.
        </NoMatching>
      )}
    </div>
  );
}
export default ProductListPage;

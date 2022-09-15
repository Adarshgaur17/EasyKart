import React from "react";
function Button(data) {
  return (
    <button className="px-8 py-2 mt-2 text-white bg-red-400 rounded">
      {data.cart}
    </button>
  );
}
export default Button;

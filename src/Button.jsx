import React from "react";
function Button(props) {
  return (
    <button
      {...props}
      className="px-8 py-2 mt-2 text-white bg-red-400 rounded"
    ></button>
  );
}
export default Button;

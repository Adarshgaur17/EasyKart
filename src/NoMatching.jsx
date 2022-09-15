import React from "react";

function NoMatching({ children }) {
  return (
    <div className="px-8 py-2 mt-2 text-2xl text-white bg-red-400 rounded">
      {children}
    </div>
  );
}
export default NoMatching;

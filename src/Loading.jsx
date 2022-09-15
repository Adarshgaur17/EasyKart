import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="flex items-center justify-center ">
      {" "}
      <AiOutlineLoading3Quarters className="text-3xl text-red-500 animate-spin" />{" "}
    </div>
  );
}
export default Loading;

import React, { useState } from "react";

function Input(props) {
  const [value, setValue] = useState(props.dValue);
  return (
    <input
      className="box-border w-12 h-10 pl-2 mt-2 border-2 border-gray-300"
      onChange={() => setValue()}
      value={value}
      type="number"
    />
  );
}
export default Input;

import { useField } from "formik";
import React from "react";
import { GrEmergency } from "react-icons/gr";

function Input({ label, id, name, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="flex">
        {label}
        <GrEmergency className="mt-1 text-xs text-red-500" />
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className="mt-2 placeholder-gray-500 border-2 "
        {...rest}
      />
      {touched && error && <div className="text-red-600">{error}</div>}
    </div>
  );
}
export default Input;

import React from "react";
import { Link } from "react-router-dom";
import { GrCheckbox, GrEmergency } from "react-icons/gr";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginPage() {
  function callLoginAPI(values) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().min(8).max(12),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginAPI,
    validationSchema: schema,
  });

  return (
    <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9 drop-shadow-2xl">
      <form onSubmit={handleSubmit}>
        <h1 className="self-center mb-5 text-2xl font-bold">Login</h1>
        <div className="p-5 font-semibold border-2 ">
          <div className="flex flex-col">
            <label htmlFor="email-address" className="flex">
              Username or email address
              <GrEmergency className="mt-1 text-xs text-red-500" />
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email-address"
              type="email"
              name="email"
              required
              className="mt-2 placeholder-gray-500 border-2 "
            ></input>
            {touched.email && errors.email && (
              <div className="text-red-600">{errors.email}</div>
            )}
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="pswd" className="flex">
              Password <GrEmergency className="mt-1 text-xs text-red-500" />
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="pswd"
              type="password"
              name="password"
              required
              className="mt-2 placeholder-gray-500 border-2 "
            ></input>
            {touched.password && errors.password && (
              <div className="text-red-600">{errors.password}</div>
            )}
          </div>
          <h3 className="flex mt-4">
            <GrCheckbox className="mt-1 mr-2" /> Remember me
          </h3>
          <button
            type="submit"
            className="self-start px-8 py-2 mt-2 text-white bg-red-400 rounded disabled:bg-red-300"
            disabled={!isValid}
          >
            Login
          </button>
          <Link
            to="/forgotPassword/"
            className="text-red-500 underline underline-offset-2"
          >
            <h3 className="mt-4 text-red-500">Lost Your Password ?</h3>
          </Link>
          <h3 className="text-red-500 ">
            New User ?
            <Link to="/signUpPage/" className="underline underline-offset-2">
              SIGN UP
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;

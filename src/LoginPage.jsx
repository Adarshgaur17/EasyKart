import React from "react";
import { Link } from "react-router-dom";
import { GrCheckbox } from "react-icons/gr";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";

function LoginPage() {
  function callLoginAPI(values) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().min(8).max(12),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9 drop-shadow-2xl">
      <Formik
        initialValues={initialValues}
        onSubmit={callLoginAPI}
        validationSchema={schema}
        validateOnMount
      >
        <Form>
          <h1 className="self-center mb-5 text-2xl font-bold">Login</h1>
          <div className="p-5 font-semibold border-2 ">
            <Input
              label="Username or email address"
              id="email-address"
              type="email"
              name="email"
              required
            />
            <Input
              label="Password"
              id="pswd"
              type="password"
              name="password"
              required
            />

            <h3 className="flex mt-4">
              <GrCheckbox className="mt-1 mr-2" /> Remember me
            </h3>
            <button
              type="submit"
              className="self-start px-8 py-2 mt-2 text-white bg-red-400 rounded disabled:bg-red-300"
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
        </Form>
      </Formik>
    </div>
  );
}
export default LoginPage;

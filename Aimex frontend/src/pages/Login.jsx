import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signinBg } from "../images";
import { loginSchema } from "../schemas";
import { clearErrors, login } from "../store/userSlice/userSlice";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticatedUser } = useSelector((state) => state.user);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log("click");
      dispatch(login(values.email, values.password));
    },
  });
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticatedUser) {
      // toast.success("Login successful");
      navigate("/market");
    }
  }, [dispatch, error, isAuthenticatedUser]);
  return (
    <div
      className="box-border w-screen h-screen bg-[length:100vw_100vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${signinBg})` }}
    >
      <div className="w-[25vw] bg-slate-200 px-10 py-10 shadow-lg">
        <h2 className="text-center mb-6 text-3xl font-bold ">Login Now</h2>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-8 w-full">
            <input
              type="email"
              placeholder="Enter email.."
              onChange={handleChange}
              name="email"
              id="email"
              className="shadow-inner w-full rounded-lg px-2 py-3 outline-none bg-slate-50"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter password.."
              onChange={handleChange}
              name="password"
              id="password"
              className="shadow-sm mb-2 w-full rounded-lg px-2 py-3 outline-none bg-slate-50"
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 mt-1 text-sm">{errors.password}</p>
            ) : null}
          </div>
          <Link to="/forgot" className="text-red-500 font-medium">
            Forgot Password?
          </Link>
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-2xl text-center w-full mt-4 pt-1 pb-2">
            Login
          </button>
        </form>
        <hr className="mt-4 bg-slate-400 py-[1px]" />
        <Link
          to="/signup"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full text-2xl pt-1 pb-2 text-center mt-4 w-full block"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;

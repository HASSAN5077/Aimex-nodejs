import React, { useEffect } from "react";
import { signinBg } from "../images";
import {
  AiFillLock,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { IoIosMan } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signupSchema } from "../schemas";
import { useFormik } from "formik";
import { clearError, signUp } from "../store/userSlice/userSlice";
import { FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { error, isAuthenticatedUser } = useSelector((state) => state.user);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      console.log("click");
      dispatch(signUp(values));
    },
  });

  useEffect(() => {
    if (error) {
      if (error.includes("duplicate key")) {
        toast.error("User already exists.");
      } else {
        toast.error(error);
      }
      dispatch(clearError());
    }
    if (isAuthenticatedUser) {
      toast.success("SignUp successful");
      // navigate("/");
    }
  }, [dispatch, error, isAuthenticatedUser]);

  return (
    <div
      className="box-border w-screen h-screen bg-[length:100vw_100vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${signinBg})` }}
    >
      <div className="w-[27vw] bg-slate-200 px-10 py-4 shadow-lg">
        <h2 className="font-bold text-center text-3xl">
          Welcome to Aimex Exchange
        </h2>
        <form action="" className="mt-8" onSubmit={handleSubmit}>
          <div className="flex items-center bg-slate-100 rounded-lg mb-1">
            <AiOutlineUser size={40} color="#000" className="px-2" />
            <input
              type="text"
              onChange={handleChange}
              id="first_name"
              name="first_name"
              className="w-full py-3 outline-none px-3"
              placeholder="Enter first name.."
            />
          </div>
          {errors.first_name && touched.first_name ? (
            <p className="text-red-500 text-sm">{errors.first_name}</p>
          ) : null}
          <div className="flex items-center bg-slate-100 rounded-lg mt-4">
            <AiOutlineUserAdd size={40} color="#000" className="px-2" />
            <input
              type="text"
              onChange={handleChange}
              id="last_name"
              name="last_name"
              className="w-full py-3 outline-none px-3"
              placeholder="Enter last name.."
            />
          </div>
          {errors.last_name && touched.last_name ? (
            <p className="text-red-500 text-sm">{errors.last_name}</p>
          ) : null}

          <div className="flex items-center bg-slate-100 rounded-lg mt-4">
            <AiOutlineMail size={40} color="#000" className="px-2" />
            <input
              type="email"
              onChange={handleChange}
              id="email"
              name="email"
              className="w-full py-3 outline-none px-3"
              placeholder="Enter Email.."
            />
          </div>
          {errors.email && touched.email ? (
            <p className="text-red-500 text-sm">{errors.email}</p>
          ) : null}

          <div className="flex items-center bg-slate-100 rounded-lg mt-4">
            <AiFillLock size={40} color="#000" className="px-2" />
            <input
              type="password"
              onChange={handleChange}
              id="password"
              name="password"
              className="w-full py-3 outline-none px-3"
              placeholder="Enter Password.."
            />
          </div>
          {errors.password && touched.password ? (
            <p className="text-red-500 text-sm">{errors.password}</p>
          ) : null}

          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-2xl text-center w-full mt-8 pt-1 pb-2">
            Sign Up
          </button>
        </form>
        <p className="mt-2 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            {" "}
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

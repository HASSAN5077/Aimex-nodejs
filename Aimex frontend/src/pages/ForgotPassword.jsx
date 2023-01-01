import axiosFetch from "../axios/axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinBg } from "../images";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { "Content-Type": "application/text" },
      };
      setLoading(true);
      const response = await axiosFetch.post(`/forgot_password`, { email });
      navigate("/login");
      toast.success("Your email has been send successfully");
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error(err.response.data.message);
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div
      className="box-border w-screen h-screen bg-[length:100vw_100vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${signinBg})` }}
    >
      <form
        onSubmit={handleSubmitEmail}
        className="w-1/3 bg-white py-5 px-16 flex flex-col justify-center items-center shadow-2xl"
      >
        <h2 className="text-4xl font-bold">Reset Password</h2>
        <div className="mt-10 w-full flex flex-column">
          <label htmlFor="email" className="text-lg font-semibold">
            Enter Email:
          </label>
          <input
            type="email"
            name=""
            id="email"
            value={email}
            className="mt-2 border-2 border-solid p-3 rounded-sm"
            placeholder="Please enter your email...."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-8 text-2xl font-medium bg-gray-900 text-white py-3 px-5 rounded-full hover:bg-black"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosFetch from "../axios/axios";
import Loader from "../components/Loader";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password does not match.");
    }
    else if(password.length < 6){
        setError('Password lenght should be minimum of 6 characters')
    }
     else {
      setError("");
      try {
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        setLoading(true);
        const response = await axiosFetch.post(
          `/reset_password/${token}`,
          {
            password,
            confirmPassword,
          },
          config
        );
        navigate("/login");
        toast.success("Password reset successfully");
      } catch (err) {
        setLoading(false);
        toast.error(err.response.data.message);
        console.error(err);
      }
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="box-border w-screen h-screen bg-[length:100vw_100vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 bg-white py-5 px-16 flex flex-col justify-center items-center shadow-2xl"
      >
        <h2 className="text-4xl font-bold">Reset Password</h2>
        <div className="mt-10 w-full flex flex-column">
          <label htmlFor="password" className="text-lg font-semibold">
            Enter New Password:
          </label>
          <input
            type="password"
            name=""
            id="password"
            value={password}
            className="mt-2 border-2 border-solid p-3 rounded-sm"
            placeholder="Please enter your email...."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-10 w-full flex flex-column">
          <label htmlFor="confirm_password" className="text-lg font-semibold">
            Confirm New Password:
          </label>
          <input
            type="password"
            name=""
            id="confirm_password"
            value={confirmPassword}
            className="mt-2 border-2 border-solid p-3 rounded-sm"
            placeholder="Please enter your email...."
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p className="text-pink-800 mt-2">{error}</p>
        <button
          type="submit"
          className="mt-8 text-2xl font-medium bg-gray-900 text-white py-3 px-5 rounded-full hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

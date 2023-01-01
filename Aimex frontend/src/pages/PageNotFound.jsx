import React from "react";
import { Link } from "react-router-dom";
import { signinBg } from "../images";

const PageNotFound = () => {
  return (
    <div
      className="box-border w-screen h-screen bg-[length:100vw_100vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${signinBg})` }}
    >
      <div className="w-1/2 bg-white p-5 flex flex-col justify-center items-center shadow-2xl">
        <h2 className="text-6xl font-bold">Oops! Error 404</h2>
        <h4 className="mt-10 text-lg mx-24 text-center font-semibold text-gray-600 ">
          It seems this page does not exist. Maybe it might have been removed or
          temporarily unavailable.
        </h4>
        <Link to="/" className="mt-10 text-2xl text-green-600 font-medium">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

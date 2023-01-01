import React from "react";
import { Link } from "react-router-dom";
import { signinBg } from "../images";

const Banner = () => {
  return (
    <div
      className="box-border w-screen h-screen bg-[length:100vw_100vh] flex items-center px-32"
      style={{ backgroundImage: `url(${signinBg})` }}
    >
      <div>
        <h2 className="text-5xl font-bold">
          {" "}
          <span className="text-green-400"> Crypto </span> Currencies: A Reality{" "}
        </h2>
        <p className="mt-8 text-2xl font-semibold text-white">
          Explore crypto, on world’s most powerful exchange.
        </p>
        <Link
          to="/market"
          className="mt-5 px-5 py-3 bg-black inline-block rounded-xl text-white text-2xl border-4 border-green-400 hover:shadow-lg hover:shadow-green-300"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;

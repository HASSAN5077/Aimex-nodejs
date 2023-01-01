import React from "react";
import { Link } from "react-router-dom";
import { nft1, nft2, nft3 } from "../images";

const NftSection = () => {
  return (
    <div className="py-16 px-48 flex flex-col justify-center items-center bg-gradient-to-tr from-cyan-900 via-cyan-1000 to-cyan-100">
      <h2 className="text-center font-bold text-5xl mb-16">
        Discover NFT Marketplace
      </h2>
      <div className="flex justify-center items-center gap-16">
        <div
          className=" w-[25rem] h-[26rem] bg-[length:100vw_100vh] bg-contain bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url(${nft1})` }}
        ></div>
        <div
          className=" w-[25rem] h-[26rem] bg-[length:100vw_100vh] bg-contain bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url(${nft2})` }}
        ></div>
        <div
          className=" w-[25rem] h-[26rem] bg-[length:100vw_100vh] bg-contain bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url(${nft3})` }}
        ></div>
      </div>
      <Link
        to="/nft_marketplace"
        className="mt-16 inline-block bg-gradient-to-r from-green-400 to-blue-500 px-10 py-3 rounded-lg text-2xl hover:scale-105 font-semibold"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default NftSection;

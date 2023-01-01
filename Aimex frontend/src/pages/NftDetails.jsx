import React from "react";
import { useParams } from "react-router-dom";
import { NFT__DATA } from "../data/data";
const NftDetails = () => {
  const { id } = useParams();
  const nft = NFT__DATA.find((r) => r.id === id);
  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-2/3 bg-gray-100 flex gap-16 p-5 rounded-lg shadow-lg">
        <img src={nft.imgUrl} alt="" className="w-72 h-80 rounded-lg " />
        <div className="mt-5 pr-16">
          <h2 className="text-2xl font-bold text-center mb-3"> {nft.title}</h2>
          <p className="text-justify">{nft.desc}</p>
          <p className="text-lg mt-2 font-semibold">
            Current Bid: <span className="text-gray-700">${nft.currentBid}</span>
          </p>
          <div className="flex justify-center items-center w-44 mt-1 gap-2">
            <img src={nft.creatorImg} alt="" className="w-12 h-12" />
            <p>{nft.creator}</p>
          </div>
          <button className="text-center mt-4 bg-purple-600 py-2 px-5 text-lg rounded-full hover:bg-purple-700">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;

import React from "react";
import { Link } from "react-router-dom";

const NFTCard = ({ nft }) => {
  return (
    <div className="p-4 bg-gray-600 rounded-lg shadow-2xl">
      <img src={nft.imgUrl} alt="" className="w-64 h-72 rounded-lg" />
      <p className="py-2 text-white">{nft.title}</p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src={nft.creatorImg} alt="" className="w-10 h-10" />
          <div>
            <p className="text-xs text-gray-300 pb-1">Created By</p>
            <h2 className="text-gray-200 text-sm font-semibold">
              {nft.creator}
            </h2>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-300 pb-1">Current Bid</p>
          <p className="text-gray-200 text-sm">{nft.currentBid} ETH</p>
        </div>
      </div>
      <Link
        to={`/nft/${nft.id}`}
        className="bg-green-500 w-full block mt-3 py-2 text-center rounded-full text-gray-200 hover:bg-green-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default NFTCard;

import React from "react";
import NFTCard from "../components/NFTCard";
import { NFT__DATA } from "../data/data";
const NftMarket = () => {
  return (
    <div className="bg-green-300 w-full min-h-screen py-24 px-32 overflow-x-hidden	">
      <h2 className="text-gray-900 text-4xl text-center">
        Discover NFT Marketplace
      </h2>
      <div className="flex gap-8 flex-wrap pt-16 items-center justify-center">
        {NFT__DATA.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default NftMarket;

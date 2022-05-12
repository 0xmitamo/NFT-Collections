import { useEffect, useState, VFC } from 'react';
import NFTCard from './NFTCard';

const NFTContainer = ({ nfts }) => {
  return (
    <div className="container mx-auto columns-3xs px-4">
      {nfts.map((nft, index) => {
        return <NFTCard nft={nft} key={index} />;
      })}
    </div>
  );
};

export default NFTContainer;

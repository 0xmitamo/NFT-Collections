import { useEffect, useState, VFC } from 'react';

const NFTCard = ({ nft }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src={nft.meta.content[0].url} alt="" />
      <div className="mb-2 text-xl font-bold">{nft.meta.name}</div>
    </div>
  );
};

export default NFTCard;

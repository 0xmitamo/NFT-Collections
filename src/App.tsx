import { useEffect, useState, VFC } from 'react';
import logo from './logo.svg';
import './App.css';
import NFTContainer from './NFTContainer';

const App: VFC = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nfts, setNfts] = useState([]);
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setWalletAddress(accounts[0]);
    }
  };

  const getNftData = async () => {
    if (!walletAddress) return;
    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x169dC6401DB73C05219252A759361EE0d244D528`,
    );
    const data = await response.json();
    debugger;
    setNfts(data.items);
  };

  useEffect(() => {
    getNftData();
  }, [walletAddress]);

  return (
    <div className="App">
      <div>Account: {walletAddress}</div>
      <button
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
      <NFTContainer nfts={nfts} />
    </div>
  );
};

export default App;

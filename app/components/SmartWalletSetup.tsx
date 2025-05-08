"use client";

import React, { useEffect, useState } from 'react';
import { BiconomySmartAccount, BiconomySmartAccountConfig } from '@biconomy/account-abstraction';
import { ethers } from 'ethers';

export default function SmartWalletSetup() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    async function setupSmartWallet() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();

      const config: BiconomySmartAccountConfig = {
        signer,
        chainId: 8453, // Base network chain ID
      };

      const smartAccount = new BiconomySmartAccount(config);
      const wallet = await smartAccount.init();
      setWalletAddress(wallet.address);
    }

    setupSmartWallet();
  }, []);

  return (
    <div>
      {walletAddress ? (
        <p>Your Smart Wallet Address: {walletAddress}</p>
      ) : (
        <p>Setting up your smart wallet...</p>
      )}
    </div>
  );
}
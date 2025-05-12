"use client";

import React from 'react';
import { useAccount } from 'wagmi';
import {Transak, TransakConfig} from '@transak/transak-sdk';

export default function FiatOnRamp() {
  const { address } = useAccount();

  const openTransak = () => {
    if (!address) {
      alert('Please connect your wallet first');
      return;
    }

    const transak = new Transak({
      apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY || '', // Using environment variable
      environment: Transak.ENVIRONMENTS.STAGING, // Use Environments.PRODUCTION for live
      walletAddress: address, // Using connected wallet address
      themeColor: 'blue',
      defaultCryptoCurrency: 'ETH',
      networks: 'base',
    });

    transak.init();
    Transak.on(Transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log('Transak Order Successful:', orderData);
      transak.close();
    });

  };

  return (
    <button
      onClick={openTransak}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Fund Wallet with Fiat
    </button>
  );
}
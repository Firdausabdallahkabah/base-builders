// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BaseBuddyNFTModule = buildModule("BaseBuddyNFTModule", (m) => {

  const baseBuddyNFT = m.contract("BaseBuddyNFT");

  return { baseBuddyNFT };
});

export default BaseBuddyNFTModule;

export type AddressType = {
  97: string;
  56: string;
};

export enum CHAIN_ID {
  TESTNET = 97,
  MAINNET = 56,
}

export default function getChainIdFromEnv(): number {
  const env = process.env.NEXT_PUBLIC_CHAIN_ID;
  if (!env) {
    return 97;
  }
  return parseInt(env);
}

export const getRPC = () => {
  if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
    return process.env.NEXT_PUBLIC_RPC_MAINNET;
  return process.env.NEXT_PUBLIC_RPC_TESTNET;
};

export const SMART_ADDRESS = {
  CROWD_SALE: { 97: "0x00f01B0Cc92aB22afa95C6070Cc5d2604438f31C", 56: "" },
  USDT: { 97: "0xd4A80aCC3daD785377433A8bEAF1D5FF975A033B", 56: "" },
  NFT: { 97: "0x988772ABa4CCdA035Ed0b6b06A90cD1D655FF116", 56: "" },
  MARKET: { 97: "0xBb10c0311FB1f9579f063b6DD396fb07152c3ed1", 56: "" },
  AUCTION: { 97: "0xB6249aE452c9953a689A8aE254C5Fd18E19DC2F8", 56: "" },
  FLP: { 97: "0xA6b82D39F57aBdDfc1eEB7F921195307B4203aCB", 56: "" },
};

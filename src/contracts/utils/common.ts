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
  CROWD_SALE: { 97: "0x83D81Fc0Cff47BAe62C8f106c31731C8EF97b474", 56: "" },
  USDT: { 97: "0x2d76d9EC4c43f04B7A8Ea659Ffda8b2A5c8A2BD4", 56: "" },
  NFT: { 97: "", 56: "" },
  MARKET: { 97: "", 56: "" },
  AUCTION: { 97: "", 56: "" },
  IPT: { 97: "", 56: "" },
};

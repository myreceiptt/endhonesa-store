import type { Chain } from "thirdweb";
import { ethereum, polygon, base, baseSepolia } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * We need a marketplace contract on each of the chain we want to support.
 * Only list one marketplace contract address for each chain.
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0xC0b5e3111B8f09D3242C792C59e13857b62B0C78", // Not exist. Change it!
    chain: ethereum,
  },
  {
    address: "0xC0b5e3111B8f09D3242C792C59e13857b62B0C78", // Not exist. Change it!
    chain: polygon,
  },
  {
    address: "0xC0b5e3111B8f09D3242C792C59e13857b62B0C78", // Not exist. Change it!
    chain: base,
  },
  {
    address: "0xC0b5e3111B8f09D3242C792C59e13857b62B0C78", // Not exist. Change it!
    chain: baseSepolia,
  },
];

import type { Chain } from "thirdweb";
import { ethereum, polygon, base, baseSepolia } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default we create listings with the payment currency in the native token of the network (eth, pol, etc.).
 *
 * If we want to allow users to transact using different ERC20 tokens, we can add them to the config below.
 * Keep in mind this is for front-end usage. Make sure our marketplace contracts accept the ERC20s.
 * We can check that in the asset permissions.
 * By default our marketplace contract supports any asset (token).
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: ethereum,
    tokens: [
      {
        tokenAddress: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df", // Not exist. Change it!
        symbol: "OiOi",
        icon: "/oioi-token.png",
      },
    ],
  },
  {
    chain: polygon,
    tokens: [
      {
        tokenAddress: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df",
        symbol: "OiOi",
        icon: "/oioi-token.png",
      },
    ],
  },
  {
    chain: base,
    tokens: [
      {
        tokenAddress: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df", // Not exist. Change it!
        symbol: "OiOi",
        icon: "/oioi-token.png",
      },
    ],
  },
  {
    chain: baseSepolia,
    tokens: [
      {
        tokenAddress: "0x83fD0F66eA4f55D846c44539fD7BdB8F0a1d25Df", // Not exist. Change it!
        symbol: "OiOi",
        icon: "/oioi-token.png",
      },
    ],
  },
];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/eth.png",
  [polygon.id]: "/native-token-icons/matic.png",
  [base.id]: "/native-token-icons/eth.png",
  [baseSepolia.id]: "/native-token-icons/eth.png",
};

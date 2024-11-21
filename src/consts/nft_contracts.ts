import type { Chain } from "thirdweb";
import { ethereum, polygon, base, baseSepolia } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by our marketplace(s).
 * This is of course hard-coded for demo purpose.
 *
 * In reality, the list should be dynamically fetched from our own data source.
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xc06fd77c1aec4dccefc2fe6b3649ec454585fb15",
    chain: polygon,
    title: "Anthropophobia Viruses",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmWns6jJHLrZdsksAz7iia85bBsbZ1fyzvfciDbKf1MqUY/THEKINGSNFT.B2C1-1.png",
    type: "ERC721",
  },
  {
    address: "0x6710e0f18270be32f9590503e306997b3162b83e",
    chain: polygon,
    title: "Logo Pabrik Roti",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmTowqpo134kp2hyBwpHHqK3PkKbMyqxQknHj9PnhQncmy/PABRIKROTI.IDN-1.png",
    type: "ERC721",
  },
  {
    address: "0x6d2723cb02c558cf67473dc959ac08737b6129a9",
    chain: polygon,
    title: "The ROTY BROI",
    thumbnailUrl:
      "https://ipfs.io/ipfs/bafybeibwmgueevcxjtpl7z2ipku6i43osdvoftmzlrsw6tzaebns4uxf2m/530.png",
    type: "ERC721",
  },
  {
    address: "0xe75f06bff5f03769748374376443a43ff0d1fd85",
    chain: ethereum,
    title: "Prof. NOTA The Genesis",
    thumbnailUrl:
      "https://nutpngdyrqm2cvc6ppjgtgfzfokwd7lry6anrwpvs3z4vwbchf2a.arweave.net/bSb2mHiMGaFUXnvSaZi5K5Vh_XHHgNjZ9ZbzytgiOXQ",
    type: "ERC721",
  },
  {
    address: "0x562914ef273cddb3ddc02e68c4ce6d9b1e5e8fa7",
    chain: ethereum,
    title: "Conserve Roty Broi",
    thumbnailUrl:
      "https://mwc3z5qfhysyrkhenxvwkmaxdygu5dwcy37325a7ujeyvpe7bd5q.arweave.net/ZYW89gU-JYio5G3rZTAXHg1OjsLG_710H6JJiryfCPs",
    type: "ERC721",
  },
  {
    address: "0xfd039ac57cc8e646802dba4b7cf6bc561e13a09a",
    chain: base,
    title: "BANANOW BASED NFTs",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmecrbqeJj3KAz5HCt6yKcGyvoZeDoUEaBNdDXjCTag9EU/9.png",
    type: "ERC721",
  },
  {
    address: "0x4309946De4Ac379E1dc0cB122dc347815898Ff2C",
    chain: ethereum,
    title: "/ˈdeTH ˌwiSH/",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmYa27J47R3j9Yg4DKJrvPPL8A1BnYbhN5U5RXohFTWd4S/bb747dd368dc8ed9a96599718caf1538",
    type: "ERC721",
  },
  {
    address: "0x7eb71c33b26407d2eeb179c3f5ebdeab596f07bc",
    chain: ethereum,
    title: "MY RECEIPT of ETH",
    thumbnailUrl:
      "https://hdpp7vqkmkiejrcy7kp3cbk43m7lwuu6ph2s6eiz5azh2s4fheka.arweave.net/ON7_1gpikETEWPqfsQVc2z67Up559S8RGegyfUuFORQ",
    type: "ERC1155",
  },
  {
    address: "0xADa8d744441388a2964e1DB3911c912135d5206c",
    chain: ethereum,
    title: "Panthera LEO",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmPCrrDFWC2naU4tKykgtZzbJCraeFTYFUEqLjwXqZqCn1/2d589bc935d5b29a0c00c913040cf64a",
    type: "ERC721",
  },
  {
    address: "0xc3046681149f96746b362a64472fD4B1cd1E33B2",
    chain: baseSepolia,
    title: "MEMORA ZERO",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/Qme8Ha4EQyqZwN3qwNrDXjrfoq9Umpkv2f8mtYot6Cajri/0.png",
    type: "ERC1155",
  },
];

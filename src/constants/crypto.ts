import { Crypto } from "@/types/crypto";

export const CRYPTO_METADATA: Record<
  string,
  Omit<Crypto, "id" | "price" | "priceChange24h">
> = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    logoUrl: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  ethereum: {
    name: "Ethereum",
    symbol: "ETH",
    logoUrl: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  dogecoin: {
    name: "Dogecoin",
    symbol: "DOGE",
    logoUrl: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
  },
  cardano: {
    name: "Cardano",
    symbol: "ADA",
    logoUrl: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
  },
  solana: {
    name: "Solana",
    symbol: "SOL",
    logoUrl: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  },
};

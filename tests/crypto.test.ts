import { describe, it, expect, vi } from "vitest";
import { buildCryptoList } from "@/utils/crypto";
import { PriceData } from "@/types/coingecko-types";

vi.mock("@/constants/crypto", () => ({
  CRYPTO_METADATA: {
    bitcoin: {
      name: "Bitcoin",
      symbol: "BTC",
      logoUrl: "https://example.com/btc.png",
    },
    ethereum: {
      name: "Ethereum",
      symbol: "ETH",
      logoUrl: "https://example.com/eth.png",
    },
    solana: {
      name: "Solana",
      symbol: "SOL",
      logoUrl: "https://example.com/sol.png",
    },
  },
}));

describe("buildCryptoList", () => {
  it("should build a crypto list from price data", () => {
    const cryptoIds = ["bitcoin", "ethereum"];
    const priceData: PriceData = {
      bitcoin: { usd: 45000, usd_24h_change: 2.5 },
      ethereum: { usd: 3000, usd_24h_change: -1.2 },
    };

    const result = buildCryptoList(cryptoIds, priceData);

    expect(result).toEqual([
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        logoUrl: "https://example.com/btc.png",
        price: 45000,
        priceChange24h: 2.5,
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        logoUrl: "https://example.com/eth.png",
        price: 3000,
        priceChange24h: -1.2,
      },
    ]);
  });

  it("should filter out ids without price data", () => {
    const cryptoIds = ["bitcoin", "ethereum"];
    const priceData: PriceData = {
      bitcoin: { usd: 45000, usd_24h_change: 2.5 },
    };

    const result = buildCryptoList(cryptoIds, priceData);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("bitcoin");
  });

  it("should filter out ids without metadata", () => {
    const cryptoIds = ["bitcoin", "unknown-coin"];
    const priceData: PriceData = {
      bitcoin: { usd: 45000, usd_24h_change: 2.5 },
      "unknown-coin": { usd: 100, usd_24h_change: 0 },
    };

    const result = buildCryptoList(cryptoIds, priceData);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("bitcoin");
  });

  it("should handle undefined 24h change", () => {
    const cryptoIds = ["bitcoin"];
    const priceData: PriceData = {
      bitcoin: { usd: 45000 },
    };

    const result = buildCryptoList(cryptoIds, priceData);

    expect(result[0].priceChange24h).toBeUndefined();
  });

  it("should return empty array for empty inputs", () => {
    expect(buildCryptoList([], {})).toEqual([]);
  });

  it("should preserve the order of cryptoIds", () => {
    const cryptoIds = ["solana", "bitcoin", "ethereum"];
    const priceData: PriceData = {
      bitcoin: { usd: 45000, usd_24h_change: 1 },
      ethereum: { usd: 3000, usd_24h_change: 2 },
      solana: { usd: 100, usd_24h_change: 3 },
    };

    const result = buildCryptoList(cryptoIds, priceData);

    expect(result.map((c) => c.id)).toEqual(["solana", "bitcoin", "ethereum"]);
  });

  it("should handle zero price values", () => {
    const cryptoIds = ["bitcoin"];
    const priceData: PriceData = {
      bitcoin: { usd: 0, usd_24h_change: 0 },
    };

    const result = buildCryptoList(cryptoIds, priceData);

    expect(result[0].price).toBe(0);
    expect(result[0].priceChange24h).toBe(0);
  });
});

import { CRYPTO_METADATA } from "@/constants/crypto";
import { PriceData } from "@/types/coingecko-types";
import { Crypto } from "@/types/crypto";

export function buildCryptoList(cryptoIds: string[], priceData: PriceData): Crypto[] {
  return cryptoIds
    .filter((id) => priceData[id] && CRYPTO_METADATA[id])
    .map((id) => ({
      id,
      ...CRYPTO_METADATA[id],
      price: priceData[id].usd,
      priceChange24h: priceData[id].usd_24h_change,
    }));
}

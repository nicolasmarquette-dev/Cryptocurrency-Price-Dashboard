import {
  SimplePriceParams,
  PriceData,
  CoinMarketData,
} from "@/types/coingecko-types";

const COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3";

export async function getSimplePrice(
  simplePriceParams: SimplePriceParams,
): Promise<PriceData> {
  const params = new URLSearchParams({
    ids: simplePriceParams.ids.join(","),
    vs_currencies: "usd",
    include_24hr_change: String(true),
  });

  const response = await fetch(`${COINGECKO_BASE_URL}/simple/price?${params}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch prices: ${response.status}`);
  }

  return response.json();
}

export async function getCoinMarket(coinId: string): Promise<CoinMarketData> {
  const params = new URLSearchParams({
    ids: coinId,
    vs_currency: "usd",
  });

  const response = await fetch(
    `${COINGECKO_BASE_URL}/coins/markets?${params}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch coin market data: ${response.status}`);
  }

  const data: CoinMarketData[] = await response.json();

  if (data.length === 0) {
    throw new Error(`Coin not found: ${coinId}`);
  }

  return data[0];
}

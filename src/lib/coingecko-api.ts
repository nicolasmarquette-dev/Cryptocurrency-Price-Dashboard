import { SimplePriceParams, PriceData } from "@/types/coingecko-types";
import { useQuery } from "@tanstack/react-query";

const COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3";

export async function getSimplePrice(
  simplePriceParams: SimplePriceParams,
): Promise<PriceData> {
  const params = new URLSearchParams({
    ids: simplePriceParams.ids.join(","),
    vs_currencies: "usd",
    include_24hr_change: String(true),
  });

  const response = await fetch(`${COINGECKO_BASE_URL}/simple/price?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch prices: ${response.status}`);
  }

  return response.json();
}

import { getSimplePrice } from "@/lib/coingecko-api";
import { SimplePriceParams } from "@/types/coingecko-types";
import { useQuery } from "@tanstack/react-query";

export function useCryptoPrices(simplePriceParams: SimplePriceParams) {
  return useQuery({
    queryKey: ["crypto-prices", simplePriceParams],
    queryFn: () => getSimplePrice(simplePriceParams),
    staleTime: 10 * 1000,
    refetchInterval: 10 * 1000,
  });
}

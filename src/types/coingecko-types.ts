export interface PriceData {
  [key: string]: {
    usd: number;
    usd_24h_change?: number;
  };
}

export interface SimplePriceParams {
  ids: string[];
  include24hChange: boolean;
}

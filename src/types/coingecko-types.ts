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

export interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

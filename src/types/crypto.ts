export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  logoUrl: string;
  price: number;
  priceChange24h?: number;
}

export interface ICrypto {
  id: string;
  market_cap_rank: number;
  name: string;
  image: {
    image: string
    small: string
  };
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

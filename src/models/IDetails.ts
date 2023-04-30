import { ICrypto } from "./ICrypto";

export interface IDetails extends ICrypto {
  symbol: string;
  market_data: {
    price_change_percentage_1h_in_currency: {
      price_change_percentage_1h_in_currency: number;
      usd: number;
    };
    price_change_percentage_24h_in_currency: {
      price_change_percentage_24h_in_currency: number;
      usd: number;
    };
    price_change_percentage_7d_in_currency: {
      price_change_percentage_7d_in_currency: number;
      usd: number;
    };
    price_change_percentage_14d_in_currency: {
      price_change_percentage_14d_in_currency: number;
      usd: number;
    };
    price_change_percentage_30d_in_currency: {
      price_change_percentage_30d_in_currency: number;
      usd: number;
    };
    price_change_percentage_1y_in_currency: {
      price_change_percentage_1y_in_currency: number;
      usd: number;
    };
    market_data: {
      market_data: string;
      high_24h: number;
      low_24h: number;
    };
    current_price: {
      current_price: number;
      usd: number;
    };
    circulating_supply: number;
    market_cap: {
      market_cap: number;
      usd: number;
    };

    low_24h: {
      low_24h: number;
      usd: number;
    };
    high_24h: {
      high_24h: number;
      usd: number;
    };
  };
  description: {
    description: string;
    en: string;
  };
}

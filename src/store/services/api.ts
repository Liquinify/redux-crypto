import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICrypto } from "../../models/ICrypto";
import { IDetails } from "../../models/IDetails";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getListOfCryptos: builder.query<ICrypto[], number>({
      query: (page = 1) => ({
        url: `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
      }),
    }),
    getDetailOfCrypto: builder.query<IDetails, string>({
      query: (id: string) => ({
        url: `/coins/${id}`,
      }),
    }),
  }),
});

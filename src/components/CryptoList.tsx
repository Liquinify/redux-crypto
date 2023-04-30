import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ICrypto } from "../models/ICrypto";
import { cryptoApi } from "../store/services/api";
import CryptoItem from "./CryptoItem";
import Info from "./Info";
import Loader from "./Loader";
import Pagination from "./Pagination";

const CryptoList = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = cryptoApi.useGetListOfCryptosQuery(page);

  return (
    <div>
      <Info />
      {isLoading && <Loader />}
      {error && <div>Could not fetch the coins</div>}
      {data?.map((crypto: ICrypto) => (
        <Link to={`/coin/${crypto.id}`} key={crypto.id}>
          <CryptoItem crypto={crypto} />
        </Link>
      ))}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default CryptoList;

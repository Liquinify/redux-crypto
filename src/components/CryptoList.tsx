import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ICrypto } from "../models/ICrypto";
import { useGetListOfCryptosQuery } from "../store/services/api";
import CryptoItem from "./CryptoItem";
import Info from "./Info";
import Loader from "./Loader";
import Pagination from "./Pagination";

const CryptoList: FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetListOfCryptosQuery(page);

  return (
    <div>
      <Info />
      {isLoading && <Loader />}
      {error && <h1 className="details__error">Could not fetch the coins</h1>}
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

import React from "react";
import { useParams } from "react-router-dom";
import { IDetails } from "../models/IDetails";
import Details from "../pages/Details";
import { cryptoApi } from "../store/services/api";
import Loader from "./Loader";

const DetailsList = () => {
  const { name } = useParams();
  const {
    data: coinData,
    error,
    isLoading,
  } = cryptoApi.useGetDetailOfCryptoQuery(name!);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h1>Couldn't fetch the details</h1>}
      {coinData && <Details detail={coinData} />}
    </>
  );
};

export default DetailsList;

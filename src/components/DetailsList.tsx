import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailOfCryptoQuery } from "../store/services/api";
import Loader from "./Loader";
import Details from "../pages/Details";

const DetailsList: FC = () => {
  const { name } = useParams();
  const { data: coinData, error, isLoading } = useGetDetailOfCryptoQuery(name!);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h1 className="details__error">404 The cryptocurrency you tried to find does not exist</h1>}
      {coinData && <Details detail={coinData} />}
    </>
  );
};

export default DetailsList;

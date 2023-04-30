import React, { FC } from "react";
import { ICrypto } from "../models/ICrypto";

type Props = {
  crypto: ICrypto;
};

const CryptoItem: FC<Props> = ({ crypto }) => {
  return (
    <div className="item">
      <span className="item__rank">{crypto.market_cap_rank}</span>
      <div className="item__symbols">
        <img className="item__image" src={crypto.image} alt={crypto.name} />
        <p className="item__name">{crypto.name}</p>
      </div>
      <p className="item__description">
        ${crypto.current_price.toLocaleString()}
      </p>
      <p className="item__description">
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="item__description hide-mobile">
        ${crypto.total_volume.toLocaleString()}
      </p>
      <p className="item__description hide-mobile">
        ${crypto.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CryptoItem;

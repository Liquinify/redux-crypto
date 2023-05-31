import React, { FC } from "react";
import { ICrypto } from "../models/ICrypto";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

type Props = {
  crypto: ICrypto;
};

const CryptoItem: FC<Props> = ({ crypto }) => {
  const { addFavourite, removeFavourite } = useActions()
  const { favourites } = useAppSelector((state) => state.favourite)

  const addFavouriteItem = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault()
    addFavourite(crypto)
  }

  const removeFavouriteItem = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault()
    removeFavourite(crypto)
  }

  const isFav = favourites.some((f: ICrypto) => f.name === crypto?.name)

  return (
    <div className="item">
      <div className="item__group">
        {isFav ? (
          <HiStar color="orange" size={20} onClick={removeFavouriteItem}/>
        ) : (
          <HiOutlineStar color="orange" size={20} onClick={addFavouriteItem}/>    
        )}
        <span className="item__rank">{crypto.market_cap_rank}</span>
      </div>
      <div className="item__symbols">
        <img className="item__image" src={crypto.image} alt={crypto.name} />
        <p className="item__name">{crypto.name}</p>
      </div>
      <div className="item__descriptions">
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
    </div>
  );
};

export default CryptoItem;

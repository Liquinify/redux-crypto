import React from 'react'
import { Link } from 'react-router-dom';
import CryptoItem from '../components/CryptoItem';
import Info from '../components/Info';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { ICrypto } from '../models/ICrypto';

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.favourite)
  const { resetFavourite } = useActions()

  const resetFav = () => {
    resetFavourite()
  }

  return (
    <div className="fav">
      <div className="fav__options">
        <h1 className="fav__title">Wishlist</h1>
        <button className="fav__btn" onClick={resetFav}>Reset</button>
      </div>
      <Info />
      {!favourites.length && (
        <p className="fav__text">Favourites have not been added</p>
      )}
      {favourites?.map((crypto: ICrypto) =>
        <Link to={`/coin/${crypto.id}`} key={crypto.id}>
          <CryptoItem crypto={crypto} />
        </Link>
      )}
    </div>
  )
}

export default Favourites;
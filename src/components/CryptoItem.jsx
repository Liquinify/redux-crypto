import React from 'react';

const CryptoItem = ({crypto}) => {
    return (
        <div className="coin-row">
          <p>{crypto.market_cap_rank}</p>
          <div className="img-symbol">
            <img src={crypto.image} alt="" />
            <p>{crypto.symbol.toUpperCase()}</p>
          </div>
          <p>${crypto.current_price.toLocaleString()}</p>
          <p>{crypto.price_change_percentage_24h.toFixed(2)}%</p>
          <p className="hide-mobile">${crypto.total_volume.toLocaleString()}</p>
          <p className="hide-mobile">${crypto.market_cap.toLocaleString()}</p>
        </div>
    );
};

export default CryptoItem;
import React from "react";

const Info = () => {
  return (
    <div className="info">
      <div className="info__left">
      <p className="info__description">#</p>
      <p className="info__description">Name</p>
      </div>
      <div className="info__right">
        <p className="info__description">Price</p>
        <p className="info__description">24h</p>
        <p className="info__description hide-mobile">Volume</p>
        <p className="info__description hide-mobile">Market Cap</p>
      </div>
    </div>
  );
};

export default Info;

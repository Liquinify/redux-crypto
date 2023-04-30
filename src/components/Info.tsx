import React from "react";

const Info = () => {
  return (
    <div className="info">
      <p className="info__description">#</p>
      <p className="info__description">Name</p>
      <p className="info__description">Price</p>
      <p className="info__description">24h</p>
      <p className="info__description hide-mobile">Volume</p>
      <p className="info__description hide-mobile">Market Cap</p>
    </div>
  );
};

export default Info;

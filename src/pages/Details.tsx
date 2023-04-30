import React, { FC } from "react";
import { IDetails } from "../models/IDetails";
import DOMPurify from "dompurify";


type Props = {
  detail: IDetails;
};

const Details: FC<Props> = ({ detail }) => {
  return (
    <div className="details">
      <div className="details__container">
        <div className="details__content">
          <div className="details__rank">
            <span className="details__rank-btn">
              Rank # {detail.market_cap_rank}
            </span>
          </div>
          <div className="details__info">
            <div className="details__coin-heading">
              {detail.image ? <img src={detail.image.small} alt="" /> : null}
              <p>
                {detail.name} /{" "}
                {detail.symbol ? detail.symbol.toUpperCase() : null}
              </p>
            </div>
            <div className="details__coin-price">
              {detail.market_data?.current_price ? (
                <p>${detail.market_data.current_price.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="details__pricing">
          <div className="details__price-change">
            <p className="details__date">1h</p>
            <p className="details__change">
              {detail.market_data?.price_change_percentage_24h_in_currency
                .usd ? (
                <span>
                  {detail.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </span>
              ) : null}
            </p>
          </div>
          <div className="details__price-change">
            <p className="details__date">24h</p>
            <p className="details__change">
              {detail.market_data?.price_change_percentage_24h_in_currency
                .usd ? (
                <span>
                  {detail.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </span>
              ) : null}
            </p>
          </div>
          <div className="details__price-change">
            <p className="details__date">7d</p>
            <p className="details__change">
              {detail.market_data?.price_change_percentage_24h_in_currency
                .usd ? (
                <span>
                  {detail.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </span>
              ) : null}
            </p>
          </div>
          <div className="details__price-change">
            <p className="details__date">14d</p>
            <p className="details__change">
              {detail.market_data?.price_change_percentage_24h_in_currency
                .usd ? (
                <span>
                  {detail.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </span>
              ) : null}
            </p>
          </div>
          <div className="details__price-change">
            <p className="details__date">30d</p>
            <p className="details__change">
              {detail.market_data?.price_change_percentage_24h_in_currency.usd ? (
                <span>{detail.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</span>
              ) : null}
            </p>
          </div>
          <div className="details__price-change">
            <p className="details__date">1y</p>
            <p className="details__change">
              {detail.market_data?.price_change_percentage_24h_in_currency.usd ? (<span>{detail.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</span>
              ) : null}
            </p>
          </div>
        </div>
        <div className="details__content">
          <div className="details__stats">
            <div className="details__left">
              <div className="details__row">
                <h4>24 Hour Low</h4>
                {detail.market_data?.low_24h ? (
                  <p>${detail.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="details__row">
                <h4>24 Hour High</h4>
                {detail.market_data?.high_24h ? (
                  <p>${detail.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className="details__right">
              <div className="details__row">
                <h4>Market Cap</h4>
                {detail.market_data?.market_cap ? (
                  <p>${detail.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="details__row">
                <h4>Circulating Supply</h4>
                {detail.market_data ? (
                  <p>{detail.market_data.circulating_supply.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="details__content">
          <div className="details__about">
            <h3>Description</h3>
            <p className="details__description"  dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  detail.description ? detail.description.en : "None"
                ),
              }}>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

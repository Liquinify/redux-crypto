import React from "react";
import { Link } from "react-router-dom";
import Theme from "./Theme";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <h1 className="header__title">
            Crypto<span className="header__span">Navigator</span>
          </h1>
        </Link>
      </div>
      <div className="header__options">
        <Theme />
      </div>
    </div>
  );
};

export default Header;

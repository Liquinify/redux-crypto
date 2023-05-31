import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";


const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    }
    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <h1 className="header__title">
            Crypto<span className="header__span">Navigator</span>
          </h1>
        </Link>
      </div>
      {isMobile ? (
        <MobileNavigation />
      ) : (
        <div className="header__options">
          <Link to="favourites">
            <div className="header__option">
              <p className="header__text">Favourites</p>
            </div>
          </Link>
          <div className="header__option">
            <Theme />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

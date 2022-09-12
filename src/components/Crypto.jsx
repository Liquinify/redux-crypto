import React from 'react';
import CryptoItem from './CryptoItem';
import { Link } from 'react-router-dom';
import CryptoPage from '../pages/CryptoDescription';
import { useEffect, useRef } from 'react';


const Crypto = ({crypto, setPage}) => {
    const observer = useRef()
    const lastElement = useRef()

    useEffect(() => {
        var callback = function(entries) {
          if (entries[0].isIntersecting) {
            setPage(page => page + 1)
          }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [])

    return (
        <div className="container">
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className="coin-name">Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className="hide-mobile">Volume</p>
                    <p className="hide-mobile">Market Cap</p>
                </div>

                {crypto.map(crypto => {
                    return (
                      <Link to={`coin/${crypto.id}`} element={<CryptoPage />} key={crypto.id} >
                          <CryptoItem crypto={crypto} />
                      </Link>
                    )
                })}
            </div>
            <div 
              className="scroll" 
              ref={lastElement}>
                a
            </div>
        </div>
    );
};

export default Crypto;
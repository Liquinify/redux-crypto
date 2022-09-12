import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {HiSun, HiMoon} from 'react-icons/hi';

const Navbar = ({theme, setTheme}) => {
 
    return (
            <div className="navbar">
                  <FaCoins className="icon" />
                  <Link to='/'>
                    <h1 className="title">Crypto <span className="purple">Check</span></h1>
                  </Link>
                <div className="themes">
                  {theme === 'dark' ? (
                  <div onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark', e.preventDefault())}>
                    <HiSun className="theme-image" /> 
                  </div>
                   ) : 
                   (<div onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark', e.preventDefault())}>
                      <HiMoon className="theme-image" /> 
                    </div>)}
                </div>
            </div>
    );
};

export default Navbar; 
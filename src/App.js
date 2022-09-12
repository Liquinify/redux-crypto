import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Crypto from './components/Crypto';
import Navbar from './components/Navbar';
import CryptoDescription from './pages/CryptoDescription';

const App = () => {

  const [crypto, setCrypto] = useState([])
  const [page, setPage] = useState(1)
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
 
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`).then(response => {
      setCrypto(crypto => [...crypto, ...response.data])
    }).catch(error => {
      console.log(error)
    })
  }, [page])

  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path='/' element={<Crypto crypto={crypto} setCrypto={setCrypto} setPage={setPage}/>} />
        <Route path='/coin' element={<CryptoDescription />}>
          <Route path=':coinId' element={<Crypto />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

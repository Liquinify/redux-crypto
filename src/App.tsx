import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsList from "./components/DetailsList";
import Header from "./components/Header";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/coin/:name" element={<DetailsList />} />
        <Route path="favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;

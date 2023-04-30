import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import DetailsList from "./components/DetailsList";
import Header from "./components/Header";
import Main from "./pages/Main";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/coin/:name" element={<DetailsList />} />
      </Routes>
    </>
  );
}

export default App;

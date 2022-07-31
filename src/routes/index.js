/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../component/about";
import Header from "../component/header'";
import Home from "../component/search";
import CardSection from "../component/search/card";
import Details from "../component/search/cardDetails";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search/card' element={<CardSection />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

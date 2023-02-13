import React from "react";
import HomePage from "./pages/HomePage";
import GiveMeFeedBack from "./components/GiveMeFeedBack";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" justify-between  max-w-full p- mx-6">
      <MainLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<GiveMeFeedBack />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

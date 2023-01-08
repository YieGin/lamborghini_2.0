import React, { useLayoutEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./components/Landing Page/LandingPage";
import Footer from "./components/footer/footer";
import Aventador from "./components-Navbar/About/Aventador";
import Huracan from "./components-Navbar/About/Huracan";
import Urus from "./components-Navbar/About/Urus";
import Owned from "./components-Navbar/About/Owned";
import Limited from "./components-Navbar/About/Limited";
import Concept from "./components-Navbar/About/Concept";

import Customization from "./components-Navbar/Custom/Customization";
import Accessories from "./components-Navbar/Custom/Accessories";
import Financial from "./components-Navbar/Custom/Financial";
import Warranty from "./components-Navbar/Custom/Warranty";

import Connectivity from "./components-Navbar/Ownership/Connectivity";
import Mobility from "./components-Navbar/Ownership/Mobility";
import Classics from "./components-Navbar/Ownership/Classics";
import Service from "./components-Navbar/Ownership/Service";
import RecallCampaign from "./components-Navbar/Ownership/RecallCampaign";

import SuperTrofeo from "./components-Navbar/Motor/Super-Trofeo";
import GT3 from "./components-Navbar/Motor/GT3";
import Motorsport from "./components-Navbar/Motor/Motorsport";
import Drivers from "./components-Navbar/Motor/Drivers";
import MotorsportNews from "./components-Navbar/Motor/Motorsport-news";
import Experience from "./components-Navbar/Motor/Experience";
import Esports from "./components-Navbar/Motor/Esports";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Aventador" element={<Aventador />}></Route>
        <Route path="/Huracan" element={<Huracan />}></Route>
        <Route path="/Urus" element={<Urus />}></Route>
        <Route path="/Owned" element={<Owned />}></Route>
        <Route path="/Limited" element={<Limited />}></Route>
        <Route path="/Concept" element={<Concept />}></Route>

        <Route path="/Customization" element={<Customization />}></Route>
        <Route path="/Accessories" element={<Accessories />}></Route>
        <Route path="/Financial" element={<Financial />}></Route>
        <Route path="/Warranty" element={<Warranty />}></Route>

        <Route path="/Connectivity" element={<Connectivity />}></Route>
        <Route path="/Mobility" element={<Mobility />}></Route>
        <Route path="/Classics" element={<Classics />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/RecallCampaign" element={<RecallCampaign />}></Route>

        <Route path="/SuperTrofeo" element={<SuperTrofeo />}></Route>
        <Route path="/GT3" element={<GT3 />}></Route>
        <Route path="/Motorsport" element={<Motorsport />}></Route>
        <Route path="/Drivers" element={<Drivers />}></Route>
        <Route path="/MotorsportNews" element={<MotorsportNews />}></Route>
        <Route path="/Experience" element={<Experience />}></Route>
        <Route path="/Esports" element={<Esports />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;

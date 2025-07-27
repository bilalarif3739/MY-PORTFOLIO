import { useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Components/Navbar/ScrollToTop";
import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About"
import ContactPage from "./Pages/Contact/Contact"
import ProjectPage from "./Pages/Projects/Projects"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import "./App.css";

function App() {
  return (
   <Router>
    <Navbar/>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

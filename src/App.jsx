import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FloatingLines from "./Background/FloatingLines";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Counter from "./components/Stats/Stats";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

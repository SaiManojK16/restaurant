import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Header from "./components/Header";
import Footer from "./components/Footer";  // ✅ Ensure this is imported

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/franchise" element={<Franchise />} />
            </Routes>
            <Footer />  {/* ✅ Ensure Footer is placed correctly */}
        </Router>
    );
};

export default App;
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import Activities from "./pages/Activities";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Activities />
            <Footer />
        </div>
    );
}

export default App;

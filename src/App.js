import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

// ✅ Import custom components
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sites from "./components/Sites";
import WhyChooseUs from "./components/WhyChooseUs";
import OngoingProjects from "./components/OngoingProjects";
import MeetOurTeam from "./components/MeetOurTeam";
import About from "./components/About";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

// ✅ Import Pages
import Services from "./pages/Service";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Industry from "./pages/Industry";


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Sites />
                <WhyChooseUs />
                <OngoingProjects />
                <MeetOurTeam />
                <About />
                <Partners />
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/service" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industry" element={<Industry />} />

        </Routes>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

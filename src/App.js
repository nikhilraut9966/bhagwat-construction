import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// ✅ Import custom components
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sites from "./components/Sites";
import WhyChooseUs from "./components/WhyChooseUs";
import OngoingProjects from "./components/OngoingProjects";
import MeetOurTeam from "./components/MeetOurTeam";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* ✅ Main Layout */}
        <Navbar />
        <Hero />
        <Sites />
        <WhyChooseUs />
        <OngoingProjects />
        <MeetOurTeam />
        <About />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

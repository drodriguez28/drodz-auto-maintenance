import { useEffect } from "react";
import { initializeGA } from "./config/analytics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Vehicle from "./components/Vehicle";
import FooterFlowbite from "./reuse/FooterFlowbite";
import AnalyticsTracker from "./AnalyticsTracker";
import "./App.css";

function App() {
  useEffect(() => {
    initializeGA();
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles/:make" element={<Vehicle />} />
            <Route path="/vehicles/:make/:model" element={<Vehicle />} />
            <Route path="/vehicles/:make/:model/:year" element={<Vehicle />} />
          </Routes>
        </main>
        <FooterFlowbite />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrencyDashboard from "./components/CurrencyDashboard";
import FeeCalculator from "./components/FeeCalculator";
import SecuritySection from "./components/SecuritySection";
import TransactionJourney from "./components/TransactionJourney";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import PersonalPage from "./pages/PersonalPage";
import BusinessPage from "./pages/BusinessPage";
import PlatformPage from "./pages/PlatformPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const HomePage = () => (
  <>
    <Hero />
    <CurrencyDashboard />
    <FeeCalculator />
    <SecuritySection />
    <TransactionJourney />
    <Testimonials />
    <CallToAction />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

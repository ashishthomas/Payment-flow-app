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

import SendMoneyPage from "./pages/SendMoneyPage";
import ReceiveMoneyPage from "./pages/ReceiveMoneyPage";
import CardPage from "./pages/CardPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import NewsPage from "./pages/NewsPage";
import MissionPage from "./pages/MissionPage";
import InvestorPage from "./pages/InvestorPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";

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

          <Route path="/send-money" element={<SendMoneyPage />} />
          <Route path="/receive-money" element={<ReceiveMoneyPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/investors" element={<InvestorPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

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

import PersonalPage from "./pages/Header/PersonalPage";
import BusinessPage from "./pages/Header/BusinessPage";
import PlatformPage from "./pages/Header/PlatformPage";
import HelpPage from "./pages/Header/HelpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPassword";
import RegisterPage from "./pages/RegisterPage";

import SendMoneyPage from "./pages/footer/SendMoneyPage";
import ReceiveMoneyPage from "./pages/footer/ReceiveMoneyPage";
import CardPage from "./pages/CardPage";
import AboutPage from "./pages/footer/AboutPage";
import CareersPage from "./pages/footer/CareersPage";
import NewsPage from "./pages/footer/NewsPage";
import MissionPage from "./pages/footer/MissionPage";
import InvestorPage from "./pages/footer/InvestorPage";
import PrivacyPage from "./pages/footer/PrivacyPage";
import TermsPage from "./pages/footer/TermsPage";
import CookiesPage from "./pages/footer/CookiesPage";
import ChatPage from "./pages/ChatPage";
import CardDetails from "./pages/CardDetails";
import PaymentFlowPage from "./pages/PaymentFlowPage";
import StartedPaymentPage from "./pages/StartedPaymentPage";
import DashboardPage from "./pages/DashboardPage";

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
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/cardDetails" element={<CardDetails />} />
          <Route path="PaymentFlowPage" element={<PaymentFlowPage />} />
          <Route path="/started-payment" element={<StartedPaymentPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

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

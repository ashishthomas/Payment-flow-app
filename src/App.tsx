import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages
const Hero = lazy(() => import("./components/Hero"));
const CurrencyDashboard = lazy(() => import("./components/CurrencyDashboard"));
const FeeCalculator = lazy(() => import("./components/FeeCalculator"));
const SecuritySection = lazy(() => import("./components/SecuritySection"));
const TransactionJourney = lazy(
  () => import("./components/TransactionJourney")
);
const Testimonials = lazy(() => import("./components/Testimonials"));
const CallToAction = lazy(() => import("./components/CallToAction"));

const PersonalPage = lazy(() => import("./pages/Header/PersonalPage"));
const BusinessPage = lazy(() => import("./pages/Header/BusinessPage"));
const PlatformPage = lazy(() => import("./pages/Header/PlatformPage"));
const HelpPage = lazy(() => import("./pages/Header/HelpPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPassword"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const Journey = lazy(() => import("./pages/Journey"));
const SendMoneyPage = lazy(() => import("./pages/footer/SendMoneyPage"));
const ReceiveMoneyPage = lazy(() => import("./pages/footer/ReceiveMoneyPage"));
const CardPage = lazy(() => import("./pages/CardPage"));
const AboutPage = lazy(() => import("./pages/footer/AboutPage"));
const CareersPage = lazy(() => import("./pages/footer/CareersPage"));
const NewsPage = lazy(() => import("./pages/footer/NewsPage"));
const MissionPage = lazy(() => import("./pages/footer/MissionPage"));
const InvestorPage = lazy(() => import("./pages/footer/InvestorPage"));
const PrivacyPage = lazy(() => import("./pages/footer/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/footer/TermsPage"));
const CookiesPage = lazy(() => import("./pages/footer/CookiesPage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const CardDetails = lazy(() => import("./pages/CardDetails"));
const PaymentFlowPage = lazy(() => import("./pages/PaymentFlowPage"));
const StartedPaymentPage = lazy(() => import("./pages/StartedPaymentPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

// HomePage as inline component
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
        <Suspense
          fallback={
            <div className="text-white text-center py-20">Loading...</div>
          }
        >
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
            <Route path="/PaymentFlowPage" element={<PaymentFlowPage />} />
            <Route path="/started-payment" element={<StartedPaymentPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/journey" element={<Journey />} />
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

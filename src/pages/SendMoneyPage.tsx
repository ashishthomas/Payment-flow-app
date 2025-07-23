import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import {
  Send,
  Globe,
  Clock,
  Shield,
  Calculator,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";

const SendMoneyPage = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const country = searchParams.get("country");
    if (country) {
      setSelectedCountry(country);
      // Set appropriate currency based on country
      const countryToCurrency: { [key: string]: string } = {
        india: "INR",
        philippines: "PHP",
        mexico: "MXN",
        pakistan: "PKR",
      };
      setToCurrency(countryToCurrency[country] || "EUR");
    }
  }, [searchParams]);

  const countries = [
    { name: "India", code: "INR", flag: "🇮🇳", rate: 83.12 },
    { name: "Philippines", code: "PHP", flag: "🇵🇭", rate: 56.45 },
    { name: "Mexico", code: "MXN", flag: "🇲🇽", rate: 17.89 },
    { name: "Pakistan", code: "PKR", flag: "🇵🇰", rate: 278.5 },
    { name: "United Kingdom", code: "GBP", flag: "🇬🇧", rate: 0.79 },
    { name: "Canada", code: "CAD", flag: "🇨🇦", rate: 1.35 },
    { name: "Australia", code: "AUD", flag: "🇦🇺", rate: 1.52 },
    { name: "Japan", code: "JPY", flag: "🇯🇵", rate: 149.8 },
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast transfers",
      description: "Most transfers arrive within minutes",
    },
    {
      icon: Shield,
      title: "Secure & regulated",
      description: "Bank-level security and regulatory compliance",
    },
    {
      icon: Calculator,
      title: "Transparent pricing",
      description: "Real exchange rates with no hidden fees",
    },
  ];

  const handleSendMoney = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientEmail) {
      toast.error("Please enter recipient email");
      return;
    }
    toast.success("Transfer initiated! Recipient will be notified.");
  };

  const exchangeRate = countries.find((c) => c.code === toCurrency)?.rate || 1;
  const fee = 4.99;
  const totalReceived = amount * exchangeRate - fee;

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <Send className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Send Money{" "}
              {selectedCountry && (
                <span className="text-lime-400 font-medium capitalize">
                  to {selectedCountry}
                </span>
              )}
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Send money to friends, family, and businesses worldwide with real
            exchange rates and transparent fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Transfer Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Send money now
            </h2>

            <form onSubmit={handleSendMoney} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    You send
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full bg-slate-700 text-white text-xl p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                    />
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="CAD">CAD</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Recipient gets
                  </label>
                  <div className="relative">
                    <div className="w-full bg-slate-700 text-white text-xl p-4 rounded-xl border border-slate-600">
                      {totalReceived.toFixed(2)}
                    </div>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Exchange rate</span>
                  <span className="text-white">
                    1 {fromCurrency} = {exchangeRate} {toCurrency}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Transfer fee</span>
                  <span className="text-white">${fee}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-white">Total cost</span>
                  <span className="text-lime-400">
                    ${(amount + fee).toFixed(2)}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">
                  Recipient email
                </label>
                <input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  className="w-full bg-slate-700 text-white p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                  placeholder="recipient@example.com"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-lime-400 text-slate-900 py-4 rounded-xl font-semibold hover:bg-lime-300 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send money</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Popular Countries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Popular destinations
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {countries.map((country, index) => (
                <motion.div
                  key={country.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 cursor-pointer hover:bg-slate-800/70 transition-all duration-300"
                  onClick={() => {
                    setToCurrency(country.code);
                    toast.success(`Selected ${country.name}`);
                  }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="text-white font-semibold">
                        {country.name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {country.code}
                      </div>
                    </div>
                  </div>
                  <div className="text-lime-400 text-sm">
                    1 USD = {country.rate} {country.code}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-lime-400" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {feature.title}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {feature.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Need help with your transfer?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/help">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <span>Get help</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
              onClick={() => window.open("tel:+1-800-FLOWPAY")}
            >
              Call support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SendMoneyPage;

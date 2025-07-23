import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Download,
  CreditCard,
  Globe,
  Building,
  Copy,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";

const ReceiveMoneyPage = () => {
  type SupportedCurrency = "USD" | "EUR" | "GBP";
  const [selectedCurrency, setSelectedCurrency] =
    useState<SupportedCurrency>("USD");
  const [copiedField, setCopiedField] = useState("");

  const accountDetails = {
    USD: {
      accountNumber: "1234567890",
      routingNumber: "021000021",
      swiftCode: "FLOWUS33",
      bankName: "FlowPay Bank USA",
      address: "123 Financial District, New York, NY 10004",
    },
    EUR: {
      iban: "GB29 FLOW 6016 1331 9268 19",
      bic: "FLOWGB2L",
      bankName: "FlowPay Bank Europe",
      address: "456 Banking Street, London, EC2V 8RF",
    },
    GBP: {
      accountNumber: "12345678",
      sortCode: "04-00-04",
      bankName: "FlowPay Bank UK",
      address: "789 Finance Avenue, London, EC2V 8RF",
    },
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success(`${field} copied to clipboard!`);
    setTimeout(() => setCopiedField(""), 2000);
  };

  const features = [
    {
      icon: Globe,
      title: "Multi-currency account",
      description: "Hold money in 50+ currencies with local bank details",
      benefits: [
        "Local bank details in 10 countries",
        "Real exchange rates",
        "No monthly fees",
      ],
    },
    {
      icon: Building,
      title: "Large amount transfers",
      description: "Receive large transfers with competitive rates",
      benefits: ["No upper limits", "Dedicated support", "Same-day processing"],
    },
    {
      icon: CreditCard,
      title: "International wire",
      description: "Traditional wire transfers from any bank worldwide",
      benefits: [
        "SWIFT network",
        "Bank-to-bank transfers",
        "Secure processing",
      ],
    },
  ];

  const currencies = [
    { code: "USD", name: "US Dollar", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  ];

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
            <Download className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Receive Money
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Get local bank details in multiple countries and receive money like
            a local, anywhere in the world.
          </p>
        </motion.div>

        {/* Account Details Section */}
        <motion.div
          id="account-details"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Your account details
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {currencies.map((currency) => (
              <motion.button
                key={currency.code}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setSelectedCurrency(currency.code as SupportedCurrency)
                }
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  selectedCurrency === currency.code
                    ? "bg-lime-400 text-slate-900"
                    : "bg-slate-700 text-white hover:bg-slate-600"
                }`}
              >
                <span className="text-xl">{currency.flag}</span>
                <span className="font-medium">{currency.code}</span>
              </motion.button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            {selectedCurrency === "USD" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <div className="text-slate-400 text-sm mb-2">
                      Account Number
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg">
                        {accountDetails.USD.accountNumber}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            accountDetails.USD.accountNumber,
                            "Account Number"
                          )
                        }
                        className="text-lime-400 hover:text-lime-300"
                      >
                        {copiedField === "Account Number" ? (
                          <CheckCircle size={20} />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <div className="text-slate-400 text-sm mb-2">
                      Routing Number
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg">
                        {accountDetails.USD.routingNumber}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            accountDetails.USD.routingNumber,
                            "Routing Number"
                          )
                        }
                        className="text-lime-400 hover:text-lime-300"
                      >
                        {copiedField === "Routing Number" ? (
                          <CheckCircle size={20} />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-2">SWIFT Code</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-lg">
                      {accountDetails.USD.swiftCode}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          accountDetails.USD.swiftCode,
                          "SWIFT Code"
                        )
                      }
                      className="text-lime-400 hover:text-lime-300"
                    >
                      {copiedField === "SWIFT Code" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-2">
                    Bank Details
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">
                      {accountDetails.USD.bankName}
                    </div>
                    <div className="text-sm text-slate-300">
                      {accountDetails.USD.address}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCurrency === "EUR" && (
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-2">IBAN</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-lg">
                      {accountDetails.EUR.iban}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(accountDetails.EUR.iban, "IBAN")
                      }
                      className="text-lime-400 hover:text-lime-300"
                    >
                      {copiedField === "IBAN" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-2">BIC/SWIFT</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-lg">
                      {accountDetails.EUR.bic}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(accountDetails.EUR.bic, "BIC")
                      }
                      className="text-lime-400 hover:text-lime-300"
                    >
                      {copiedField === "BIC" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-2">
                    Bank Details
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">
                      {accountDetails.EUR.bankName}
                    </div>
                    <div className="text-sm text-slate-300">
                      {accountDetails.EUR.address}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCurrency === "GBP" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <div className="text-slate-400 text-sm mb-2">
                      Account Number
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg">
                        {accountDetails.GBP.accountNumber}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            accountDetails.GBP.accountNumber,
                            "Account Number"
                          )
                        }
                        className="text-lime-400 hover:text-lime-300"
                      >
                        {copiedField === "Account Number" ? (
                          <CheckCircle size={20} />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <div className="text-slate-400 text-sm mb-2">Sort Code</div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg">
                        {accountDetails.GBP.sortCode}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            accountDetails.GBP.sortCode,
                            "Sort Code"
                          )
                        }
                        className="text-lime-400 hover:text-lime-300"
                      >
                        {copiedField === "Sort Code" ? (
                          <CheckCircle size={20} />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-2">
                    Bank Details
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">
                      {accountDetails.GBP.bankName}
                    </div>
                    <div className="text-sm text-slate-300">
                      {accountDetails.GBP.address}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!accountDetails[selectedCurrency] && (
              <div className="text-center py-8">
                <div className="text-slate-400 mb-4">
                  Account details for {selectedCurrency} coming soon!
                </div>
                <Link to="/register">
                  <button className="bg-lime-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-colors">
                    Get notified
                  </button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>

        {/* Features Section */}
        <div
          id="multi-currency"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-lime-400/10 border border-lime-400/30 rounded-2xl flex items-center justify-center">
                  <feature.icon className="text-lime-400" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="large-transfers"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Ready to receive money?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Open your multi-currency account today and start receiving money
            from anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <span>Open account</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <Link to="/help">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
              >
                Learn more
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReceiveMoneyPage;

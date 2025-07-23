import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Plane,
  Building2,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";

const CardPage = () => {
  type CardType = "personal" | "travel" | "business";
  const [selectedCardType, setSelectedCardType] =
    useState<CardType>("personal");

  const cardTypes: { id: CardType; icon: React.ElementType; label: string }[] =
    [
      { id: "personal", icon: CreditCard, label: "Personal" },
      { id: "travel", icon: Plane, label: "Travel" },
      { id: "business", icon: Building2, label: "Business" },
    ];

  const cardFeatures = {
    personal: [
      "Spend in 175+ countries",
      "Real exchange rates",
      "No foreign transaction fees",
      "Free ATM withdrawals (up to $200/month)",
      "Contactless payments",
      "Apple Pay & Google Pay",
    ],
    travel: [
      "No foreign transaction fees",
      "Real-time exchange rates",
      "Travel insurance included",
      "Airport lounge access",
      "Emergency card replacement",
      "24/7 travel support",
    ],
    business: [
      "Expense management tools",
      "Multi-user access",
      "Spending controls",
      "Receipt capture",
      "Integration with accounting software",
      "Dedicated business support",
    ],
  };

  const fees = [
    {
      service: "Monthly fee",
      cost: "Free",
      description: "No monthly maintenance fee",
    },
    {
      service: "ATM withdrawals",
      cost: "Free up to $200/month",
      description: "Then 2% of withdrawal amount",
    },
    {
      service: "Foreign transactions",
      cost: "Free",
      description: "Real exchange rate, no markup",
    },
    {
      service: "Card replacement",
      cost: "$5",
      description: "Emergency replacement worldwide",
    },
    { service: "Cash advance", cost: "3%", description: "Minimum $5 fee" },
  ];

  const handleOrderCard = () => {
    toast.success(
      "Card order initiated! You'll receive it in 5-7 business days."
    );
  };

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
            <CreditCard className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              FlowPay Card
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Spend like a local anywhere in the world. Your money, your way, with
            real exchange rates and no hidden fees.
          </p>
        </motion.div>

        {/* Card Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="w-96 h-60 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-3xl p-8 text-slate-900 shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div className="text-2xl font-bold">FlowPay</div>
                <div className="w-12 h-8 bg-slate-900/20 rounded-lg"></div>
              </div>
              <div className="space-y-4">
                <div className="font-mono text-xl tracking-wider">
                  •••• •••• •••• 1234
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs opacity-70">VALID THRU</div>
                    <div className="font-mono">12/28</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70">CVV</div>
                    <div className="font-mono">•••</div>
                  </div>
                </div>
                <div className="font-semibold">JOHN SMITH</div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center"
            >
              ✨
            </motion.div>
          </div>
        </motion.div>

        {/* Card Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">
            Choose your card type
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cardTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCardType(type.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-full transition-all ${
                  selectedCardType === type.id
                    ? "bg-lime-400 text-slate-900"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
              >
                <type.icon size={24} />
                <span className="font-semibold">{type.label}</span>
              </motion.button>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 capitalize">
              {selectedCardType} card features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cardFeatures[selectedCardType].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle
                    className="text-lime-400 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOrderCard}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <CreditCard size={20} />
                <span>Order {selectedCardType} card</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ATM Section */}
        <motion.div
          id="atm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">
              ATM withdrawals worldwide
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Access your money anywhere with free ATM withdrawals up to $200
              per month. After that, just 2% fee - still better than most banks.
            </p>

            <div className="space-y-4">
              {[
                "Free withdrawals up to $200/month",
                "Access to 55,000+ ATMs worldwide",
                "Real exchange rates",
                "No additional bank fees",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <MapPin className="text-lime-400 flex-shrink-0" size={20} />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              ATM Network Coverage
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { country: "United States", atms: "15,000+" },
                { country: "United Kingdom", atms: "8,500+" },
                { country: "Canada", atms: "6,200+" },
                { country: "Australia", atms: "4,800+" },
                { country: "Germany", atms: "3,900+" },
                { country: "France", atms: "3,200+" },
              ].map((location, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-slate-700/50 rounded-xl"
                >
                  <div className="text-lime-400 font-bold text-lg">
                    {location.atms}
                  </div>
                  <div className="text-slate-300 text-sm">
                    {location.country}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fees Section */}
        <motion.div
          id="fees"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">
            Transparent pricing
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-white font-semibold py-4">
                    Service
                  </th>
                  <th className="text-left text-white font-semibold py-4">
                    Cost
                  </th>
                  <th className="text-left text-white font-semibold py-4">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-4 text-slate-300">{fee.service}</td>
                    <td className="py-4 text-lime-400 font-semibold">
                      {fee.cost}
                    </td>
                    <td className="py-4 text-slate-400 text-sm">
                      {fee.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Ready for your FlowPay card?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join millions who trust FlowPay for their international spending
            needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <span>Get your card</span>
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

export default CardPage;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, CreditCard, Globe, Shield, ArrowRight } from "lucide-react";

const PersonalPage = () => {
  const features = [
    {
      icon: Globe,
      title: "Multi-currency account",
      description:
        "Hold and manage money in 50+ currencies with real exchange rates.",
      benefits: [
        "No monthly fees",
        "Real exchange rates",
        "Local bank details",
      ],
    },
    {
      icon: CreditCard,
      title: "FlowPay debit card",
      description: "Spend worldwide with automatic currency conversion.",
      benefits: [
        "Free ATM withdrawals",
        "No foreign transaction fees",
        "Contactless payments",
      ],
    },
    {
      icon: Shield,
      title: "Secure transfers",
      description: "Send money to friends and family in 80+ countries.",
      benefits: [
        "Bank-level security",
        "Fast transfers",
        "Low transparent fees",
      ],
    },
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
            <User className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Personal Banking
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage your money internationally. From
            multi-currency accounts to worldwide spending.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join millions of people who trust FlowPay for their international
            money needs.
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

export default PersonalPage;

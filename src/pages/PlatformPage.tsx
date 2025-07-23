import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Layers,
  Webhook,
  Database,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const PlatformPage = () => {
  const apiFeatures = [
    {
      icon: Code,
      title: "RESTful API",
      description:
        "Simple, powerful APIs to integrate FlowPay into your applications.",
      features: ["Easy integration", "Comprehensive docs", "SDKs available"],
    },
    {
      icon: Webhook,
      title: "Real-time webhooks",
      description:
        "Get instant notifications about payment status and account updates.",
      features: ["Event-driven", "Secure delivery", "Retry logic"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Access detailed transaction data and business insights.",
      features: [
        "Transaction history",
        "Custom reports",
        "Export capabilities",
      ],
    },
  ];

  const codeExample = `// Initialize FlowPay SDK
import FlowPay from '@flowpay/sdk';

const flowpay = new FlowPay({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

// Create a payment
const payment = await flowpay.payments.create({
  amount: 1000,
  currency: 'USD',
  recipient: {
    email: 'recipient@example.com'
  }
});

console.log('Payment created:', payment.id);`;

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
            <Layers className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Developer Platform
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Build the future of finance with our comprehensive APIs and
            developer tools. From simple integrations to complex financial
            products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-6">
              Get started in minutes
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our developer-first approach means you can integrate FlowPay into
              your application quickly and easily.
            </p>

            <div className="space-y-4">
              {[
                "Sign up for a developer account",
                "Get your API keys",
                "Make your first API call",
                "Go live with real payments",
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-lime-400 text-slate-900 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-slate-300">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Quick Start</h3>
              <ExternalLink className="text-slate-400" size={20} />
            </div>
            <pre className="text-sm text-slate-300 overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {apiFeatures.map((feature, index) => (
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
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Ready to build?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the next generation of
            financial applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <span>Get API keys</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center space-x-3"
              onClick={() =>
                window.open("https://yourapp.com/lander", "_blank")
              }
            >
              <span>View docs</span>
              <ExternalLink size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformPage;

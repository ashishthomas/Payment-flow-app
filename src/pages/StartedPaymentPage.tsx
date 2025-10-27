// src/pages/StartedPaymentPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { onboardingSteps } from "../data/PaymentPage";

const StartedPaymentPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-light text-center mb-12"
        >
          Getting <span className="text-lime-400 font-medium">Started</span> is
          Easy
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {onboardingSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold text-lime-400 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Already have an account? Jump straight into payments.
          </p>
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <ArrowRight size={18} />
              Go to Dashboard
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default StartedPaymentPage;

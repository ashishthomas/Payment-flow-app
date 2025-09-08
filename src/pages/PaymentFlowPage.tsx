import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { steps } from "../data/PaymentFlowPage";

const PaymentFlowPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light mb-10"
        >
          How <span className="text-lime-400 font-medium">FlowPay</span> Works
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold text-lime-400 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-lime-400 text-slate-900 px-6 py-3 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowRight size={18} />
            Back to Home
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentFlowPage;

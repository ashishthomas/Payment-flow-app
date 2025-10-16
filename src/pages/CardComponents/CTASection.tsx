import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
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
        Join millions who trust FlowPay for their international spending needs.
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
  );
}

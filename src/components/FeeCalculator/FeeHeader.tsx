import { motion } from "framer-motion";

const FeeHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
      Compare <span className="text-lime-400 font-medium">real costs</span>
    </h2>
    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
      See how much you save with FlowPay compared to traditional banks. We use
      the real exchange rate with transparent fees.
    </p>
  </motion.div>
);

export default FeeHeader;

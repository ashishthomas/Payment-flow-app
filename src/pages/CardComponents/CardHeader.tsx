import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

export default function CardHeader() {
  return (
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
  );
}

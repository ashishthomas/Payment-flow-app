import { motion } from "framer-motion";

export default function CardPreview() {
  return (
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
              •••• •••• •••• 6952
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
            <div className="font-semibold">ASHISH SUNIL THOMAS</div>
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
  );
}

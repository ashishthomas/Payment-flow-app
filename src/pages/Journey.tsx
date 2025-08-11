import { motion } from "framer-motion";
import { Compass, ShieldCheck, Send, CreditCard } from "lucide-react";
import { useMemo } from "react";

const Journey = () => {
  const steps = useMemo(
    () => [
      {
        icon: <Compass size={32} className="text-lime-400" />,
        title: "Discover FlowPay",
        description:
          "Learn how FlowPay helps you send, spend, and save money without borders or hidden fees.",
      },
      {
        icon: <ShieldCheck size={32} className="text-lime-400" />,
        title: "Secure Your Finances",
        description:
          "Your money and data are protected with cutting-edge encryption and 24/7 monitoring.",
      },
      {
        icon: <Send size={32} className="text-lime-400" />,
        title: "Send Without Limits",
        description:
          "Transfer funds to over 80 countries with real exchange rates and no hidden charges.",
      },
      {
        icon: <CreditCard size={32} className="text-lime-400" />,
        title: "Spend Anywhere",
        description:
          "Get your multi-currency debit card and spend globally like a local.",
      },
    ],
    []
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900 flex flex-col items-center px-6 py-16">
      {/* Static Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(225, 252, 2, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(225, 252, 2, 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-lime-400 mb-6 mt-6">
          Your Journey Starts Here 🚀
        </h1>
        <p className="text-slate-300 text-lg mb-8">
          Welcome to FlowPay — where managing your money is seamless, secure,
          and smart. Let’s walk you through the steps that make your financial
          life easier.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl relative z-10 mt-8 w-full">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // smaller delay for faster appearance
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 flex flex-col items-start space-y-4 shadow-lg hover:shadow-lime-400/10 transition-shadow"
          >
            <div className="p-3 bg-slate-900 rounded-xl">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-slate-400">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 relative z-10 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-lime-400 text-slate-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors"
          onClick={() => alert("Let's get started!")}
        >
          Start Your First Transfer
        </motion.button>
        <div className="mt-4 text-slate-400 text-sm">
          No hidden fees • Instant setup • Global access
        </div>
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lime-400 underline hover:text-lime-300"
            onClick={() => window.history.back()}
          >
            ← Go Back
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;

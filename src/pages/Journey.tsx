import { motion } from "framer-motion";
import { Compass, ShieldCheck, Send, CreditCard } from "lucide-react";
import { useMemo } from "react";
import type { ReactElement } from "react";
import { JOURNEY_TEXT } from "../constants/Journey-constants";

// 👇 Define a type-safe map of icons
const iconMap: Record<
  "Compass" | "ShieldCheck" | "Send" | "CreditCard",
  ReactElement
> = {
  Compass: <Compass size={32} className="text-lime-400" />,
  ShieldCheck: <ShieldCheck size={32} className="text-lime-400" />,
  Send: <Send size={32} className="text-lime-400" />,
  CreditCard: <CreditCard size={32} className="text-lime-400" />,
};

const Journey = () => {
  const steps = useMemo(
    () =>
      JOURNEY_TEXT.STEPS.map((step) => ({
        ...step,
        // 👇 Cast to specific key type to avoid 'string' error
        icon: iconMap[step.icon as keyof typeof iconMap],
      })),
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
          {JOURNEY_TEXT.MAIN_TITLE}
        </h1>
        <p className="text-slate-300 text-lg mb-8">
          {JOURNEY_TEXT.MAIN_DESCRIPTION}
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl relative z-10 mt-8 w-full">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
          onClick={() => alert(JOURNEY_TEXT.CTA_ALERT)}
        >
          {JOURNEY_TEXT.CTA_BUTTON}
        </motion.button>
        <div className="mt-4 text-slate-400 text-sm">
          {JOURNEY_TEXT.CTA_MESSAGE}
        </div>
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lime-400 underline hover:text-lime-300"
            onClick={() => globalThis.history.back()}
          >
            {JOURNEY_TEXT.CTA_BACK}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { heroText, reviewBadges } from "../data/HeroText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Review Badges */}
      {reviewBadges.map((item, i) => (
        <motion.div
          key={item.source}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.2 }}
          className={`absolute ${
            i === 0 ? "top-40 md:top-32 right-8" : "top-60 md:top-40 left-8"
          } bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 text-center`}
        >
          <div className="flex items-center justify-center mb-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={16} className="text-lime-400 fill-current" />
            ))}
          </div>

          <div className="text-white font-semibold text-lg">{item.rating}</div>
          <div className="text-slate-400 text-sm">{item.source}</div>
          <div className="text-slate-500 text-xs">{item.reviews}</div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight mt-20"
        >
          {heroText.titlePart1}{" "}
          <span className="text-lime-400 font-medium">
            {heroText.titleHighlight}
          </span>{" "}
          {heroText.titlePart2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {heroText.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/started-payment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors"
            >
              {heroText.primaryButton}
            </motion.button>
          </Link>

          <Link to="/PaymentFlowPage">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
            >
              {heroText.secondaryButton}
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-17 mb-4 text-slate-400 text-sm"
        >
          {heroText.trustedBy}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

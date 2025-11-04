import { motion } from "framer-motion";

const SecurityHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
      Your money is <span className="text-lime-400 font-medium">safe</span>
    </h2>
    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
      We use industry-leading security measures to protect your money and
      personal information. Trust is earned, security is guaranteed.
    </p>
  </motion.div>
);

export default SecurityHeader;

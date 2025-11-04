import { motion } from "framer-motion";

const stats = [
  { label: "Countries regulated in", value: "40+" },
  { label: "Customers worldwide", value: "16M+" },
  { label: "Money transferred", value: "$120B+" },
  { label: "Security certifications", value: "25+" },
];

const SecurityStats = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
  >
    <div className="text-center mb-8">
      <h3 className="text-3xl font-semibold text-white mb-4">
        Trusted by millions
      </h3>
      <p className="text-slate-400">
        We're regulated by financial authorities worldwide
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-lime-400 mb-2">
            {stat.value}
          </div>
          <div className="text-slate-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default SecurityStats;

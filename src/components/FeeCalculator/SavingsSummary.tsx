import { motion } from "framer-motion";

interface Props {
  savings: number;
  percentage: string;
}

const SavingsSummary = ({ savings, percentage }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mt-8 p-6 bg-lime-400/10 border border-lime-400/30 rounded-2xl"
  >
    <div className="text-3xl font-bold text-lime-400 mb-2">
      You save ${savings.toFixed(2)}
    </div>
    <div className="text-slate-300">
      That's {percentage}% more money for your recipient
    </div>
  </motion.div>
);

export default SavingsSummary;

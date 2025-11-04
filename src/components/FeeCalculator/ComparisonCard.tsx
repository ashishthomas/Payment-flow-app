import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Props {
  title: string;
  fee: number;
  rate: number | string;
  total: number;
  highlight?: boolean;
}

const ComparisonCard = ({ title, fee, rate, total, highlight }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: highlight ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className={`${
      highlight
        ? "bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border-2 border-lime-400/30"
        : "bg-slate-800/50 border border-slate-700/50"
    } rounded-3xl p-8`}
  >
    <div className="flex items-center space-x-3 mb-4">
      {highlight && <CheckCircle className="text-lime-400" size={24} />}
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-3 mb-6">
      <div className="flex justify-between">
        <span className="text-slate-400">Transfer fee</span>
        <span className="text-white">${fee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-400">Exchange rate</span>
        <span className="text-white">{rate}</span>
      </div>
      <div className="border-t border-slate-600 pt-3">
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-white">Total to recipient</span>
          <span className={highlight ? "text-lime-400" : "text-red-400"}>
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ComparisonCard;

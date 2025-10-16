import { motion } from "framer-motion";
import { fees } from "../../data/CardData";

export default function FeesTable() {
  return (
    <motion.div
      id="fees"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-16"
    >
      <h2 className="text-3xl font-semibold text-white text-center mb-8">
        Transparent pricing
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left text-white font-semibold py-4">
                Service
              </th>
              <th className="text-left text-white font-semibold py-4">Cost</th>
              <th className="text-left text-white font-semibold py-4">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, i) => (
              <tr key={i} className="border-b border-slate-700/50">
                <td className="py-4 text-slate-300">{fee.service}</td>
                <td className="py-4 text-lime-400 font-semibold">{fee.cost}</td>
                <td className="py-4 text-slate-400 text-sm">
                  {fee.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

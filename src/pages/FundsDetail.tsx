import { motion } from "framer-motion";
import { ArrowLeft, PlusCircle, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { funds } from "../data/FundsData";
import { FundsDetailsText } from "../data/text/FundsDetailsText";

const FundsDetail = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link
          to="/dashboard"
          className="inline-flex items-center text-slate-400 hover:text-lime-400 transition"
        >
          <ArrowLeft size={18} className="mr-2" />{" "}
          {FundsDetailsText.backToDashboardButton}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-3xl font-semibold mb-2">
            {FundsDetailsText.fundsOverview}
          </h1>
          <p className="text-slate-400 text-sm">
            {FundsDetailsText.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl text-center"
        >
          <Wallet size={28} className="text-lime-400 mx-auto mb-3" />
          <p className="text-slate-400 mb-1">
            {FundsDetailsText.totalAvailableFunds}
          </p>
          <h2 className="text-4xl font-bold text-lime-400">
            {funds.totalFunds}
          </h2>
          <p className="text-sm text-slate-500 mt-1">{funds.currency}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-medium mb-4">
            {FundsDetailsText.fundSources}
          </h3>
          <div className="bg-slate-800/40 border border-slate-700/40 rounded-2xl divide-y divide-slate-700">
            {funds.sources.map((src) => (
              <div
                key={src.id}
                className="px-6 py-4 flex justify-between items-center hover:bg-slate-800/50 transition"
              >
                <span>{src.source}</span>
                <span className="text-lime-400 font-medium">{src.amount}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-medium mb-4">
            {FundsDetailsText.fundsAdditionHistory}
          </h3>
          <div className="bg-slate-800/30 border border-slate-700/40 rounded-2xl divide-y divide-slate-700">
            {funds.history.map((item) => (
              <div
                key={item.id}
                className="px-6 py-4 flex justify-between items-center hover:bg-slate-800/50 transition"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-slate-400">
                    {item.date} • {item.method}
                  </p>
                </div>
                <p className="text-emerald-400 font-semibold">{item.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button className="bg-lime-400 hover:bg-lime-300 text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto transition">
            <PlusCircle size={18} />
            {FundsDetailsText.addMoreFundsButton}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FundsDetail;

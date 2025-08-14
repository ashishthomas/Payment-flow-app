import { motion } from "framer-motion";
import { ArrowLeft, PlusCircle, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const FundsDetail = () => {
  // Mock fund details
  const funds = {
    totalFunds: "₹2,10,450.00",
    currency: "INR",
    sources: [
      { id: 1, source: "Bank Transfer", amount: "₹1,50,000" },
      { id: 2, source: "UPI Payments", amount: "₹45,000" },
      { id: 3, source: "Cash Deposit", amount: "₹15,450" },
    ],
    history: [
      {
        id: 1,
        title: "Funds Added via UPI",
        amount: "+₹10,000",
        date: "Aug 13, 2025",
        method: "Google Pay",
      },
      {
        id: 2,
        title: "Funds Added via Bank Transfer",
        amount: "+₹50,000",
        date: "Aug 10, 2025",
        method: "HDFC Bank",
      },
      {
        id: 3,
        title: "Funds Added via Cash",
        amount: "+₹5,000",
        date: "Aug 08, 2025",
        method: "Branch Deposit",
      },
      {
        id: 4,
        title: "Funds Added via UPI",
        amount: "+₹20,000",
        date: "Aug 01, 2025",
        method: "PhonePe",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Button */}
        <Link
          to="/dashboard"
          className="inline-flex items-center text-slate-400 hover:text-lime-400 transition"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Dashboard
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-3xl font-semibold mb-2">Funds Overview</h1>
          <p className="text-slate-400 text-sm">
            A detailed breakdown of your available funds
          </p>
        </motion.div>

        {/* Total Funds Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl text-center"
        >
          <Wallet size={28} className="text-lime-400 mx-auto mb-3" />
          <p className="text-slate-400 mb-1">Total Available Funds</p>
          <h2 className="text-4xl font-bold text-lime-400">
            {funds.totalFunds}
          </h2>
          <p className="text-sm text-slate-500 mt-1">{funds.currency}</p>
        </motion.div>

        {/* Source Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-medium mb-4">Fund Sources</h3>
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

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-medium mb-4">Funds Addition History</h3>
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

        {/* Add Funds Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button className="bg-lime-400 hover:bg-lime-300 text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto transition">
            <PlusCircle size={18} />
            Add More Funds
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FundsDetail;

import { motion } from "framer-motion";
import { CreditCard, Send, TrendingUp, CalendarDays, Plus } from "lucide-react";

const DashboardPage = () => {
  const user = {
    name: "Ashish Sunil Thomas",
    balance: "₹1,52,300.00",
    currency: "INR",
  };

  const recentTransactions = [
    {
      id: 1,
      title: "Dinner at Kyoto Sushi",
      amount: "-¥4,500",
      date: "Aug 05, 2025",
      location: "Tokyo, Japan",
    },
    {
      id: 2,
      title: "Apple Subscription",
      amount: "-$9.99",
      date: "Aug 04, 2025",
      location: "New York, USA",
    },
    {
      id: 3,
      title: "Coffee with client",
      amount: "-£6.50",
      date: "Aug 03, 2025",
      location: "London, UK",
    },
    {
      id: 4,
      title: "Client payment received",
      amount: "+₹75,000",
      date: "Aug 01, 2025",
      location: "Delhi, India",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-4"
        >
          <h1 className="text-4xl font-light mb-2">
            Welcome back,{" "}
            <span className="text-lime-400 font-medium">{user.name}</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Here's your financial activity overview
          </p>
        </motion.div>

        {/* Balance + Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div>
            <p className="text-slate-400 mb-2">Available Balance</p>
            <h2 className="text-4xl font-semibold text-lime-400">
              {user.balance}
            </h2>
            <p className="text-sm text-slate-500 mt-1">{user.currency}</p>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-lime-400 hover:bg-lime-300 text-slate-900 px-5 py-3 rounded-full font-medium flex items-center gap-2 transition">
              <Send size={18} />
              Send Money
            </button>
            <button className="border border-slate-600 hover:bg-slate-800 px-5 py-3 rounded-full font-medium flex items-center gap-2 transition">
              <Plus size={18} />
              Add Funds
            </button>
          </div>

          <div className="flex items-center justify-end space-x-4 text-right hidden md:block">
            <TrendingUp size={18} className="text-lime-400" />
            <p className="text-sm text-slate-400">
              +12% more activity this week
            </p>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-medium mb-6">Recent Transactions</h3>
          <div className="bg-slate-800/30 border border-slate-700/40 rounded-2xl divide-y divide-slate-700">
            {recentTransactions.map((tx) => (
              <div
                key={tx.id}
                className="px-6 py-4 flex justify-between items-center hover:bg-slate-800/40 transition"
              >
                <div>
                  <p className="text-white font-medium">{tx.title}</p>
                  <p className="text-sm text-slate-400">
                    {tx.date} • {tx.location}
                  </p>
                </div>
                <div
                  className={`text-lg font-semibold ${
                    tx.amount.startsWith("+")
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-emerald-800/40 to-slate-800/50 border border-slate-700/40 p-6 rounded-2xl relative overflow-hidden">
            <CreditCard size={24} className="text-lime-400 mb-4" />
            <h4 className="text-white font-medium text-xl mb-1">
              FlowPay Card
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Tap. Swipe. Convert instantly.
            </p>
            <div className="text-slate-300 text-xs">Card ending in 1234</div>
            <div className="text-slate-300 text-xs">Valid Thru: 12/28</div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/40 p-6 rounded-2xl">
            <CalendarDays size={24} className="text-lime-400 mb-4" />
            <h4 className="text-white font-medium text-xl mb-1">
              Scheduled Transfers
            </h4>
            <p className="text-slate-400 text-sm mb-2">
              You have 2 upcoming transfers scheduled this week.
            </p>
            <button className="mt-2 text-lime-400 hover:underline text-sm">
              View Schedule
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;

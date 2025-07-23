import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";

const BusinessPage = () => {
  const solutions = [
    {
      icon: TrendingUp,
      title: "International payments",
      description:
        "Pay suppliers and contractors worldwide with competitive rates.",
      features: ["Bulk payments", "API integration", "Payment tracking"],
    },
    {
      icon: Users,
      title: "Multi-user accounts",
      description:
        "Team access with role-based permissions and spending controls.",
      features: ["User management", "Spending limits", "Approval workflows"],
    },
    {
      icon: Zap,
      title: "Business automation",
      description:
        "Automate recurring payments and integrate with your systems.",
      features: ["Recurring payments", "API access", "Webhook notifications"],
    },
  ];

  const stats = [
    { value: "500K+", label: "Businesses trust us" },
    { value: "$50B+", label: "Business payments processed" },
    { value: "99.9%", label: "Uptime guarantee" },
    { value: "24/7", label: "Business support" },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <Building2 className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Business Solutions
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Scale your business globally with our comprehensive financial
            infrastructure. From startups to enterprises, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-lime-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-lime-400/10 border border-lime-400/30 rounded-2xl flex items-center justify-center">
                  <solution.icon className="text-lime-400" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {solution.title}
                </h3>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Ready to scale globally?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust FlowPay for their
            international operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <span>Start free trial</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
              onClick={() =>
                window.open("mailto:business@flowpay.com", "_blank")
              }
            >
              Contact sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessPage;

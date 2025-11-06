import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, Zap } from "lucide-react";

const BusinessPage = () => {
  const solutions = [
    {
      id: "international-payments",
      icon: TrendingUp,
      title: "International payments",
      description:
        "Pay suppliers and contractors worldwide with competitive rates.",
      features: ["Bulk payments", "API integration", "Payment tracking"].map(
        (f) => ({ id: `${f.toLowerCase().replaceAll(/\s+/g, "-")}`, text: f })
      ),
    },
    {
      id: "multi-user",
      icon: Users,
      title: "Multi-user accounts",
      description:
        "Team access with role-based permissions and spending controls.",
      features: [
        "User management",
        "Spending limits",
        "Approval workflows",
      ].map((f) => ({
        id: `${f.toLowerCase().replaceAll(/\s+/g, "-")}`,
        text: f,
      })),
    },
    {
      id: "business-automation",
      icon: Zap,
      title: "Business automation",
      description:
        "Automate recurring payments and integrate with your systems.",
      features: [
        "Recurring payments",
        "API access",
        "Webhook notifications",
      ].map((f) => ({
        id: `${f.toLowerCase().replaceAll(/\s+/g, "-")}`,
        text: f,
      })),
    },
  ];

  const stats = [
    { id: "business-trust", value: "500K+", label: "Businesses trust us" },
    {
      id: "payments-processed",
      value: "$50B+",
      label: "Business payments processed",
    },
    { id: "uptime", value: "99.9%", label: "Uptime guarantee" },
    { id: "support", value: "24/7", label: "Business support" },
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

        {/* ✅ Fixed */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
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

        {/* ✅ Fixed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
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
                {solution.features.map((feature) => (
                  <li key={feature.id} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    <span className="text-slate-300">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Rest UI same */}
      </div>
    </div>
  );
};

export default BusinessPage;

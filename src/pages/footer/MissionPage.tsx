import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Globe,
  Users,
  Heart,
  ArrowRight,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";

const MissionPage = () => {
  const principles = [
    {
      icon: Globe,
      title: "Global by design",
      description:
        "We build for a world without financial borders, where money moves as freely as information.",
    },
    {
      icon: Users,
      title: "Customer obsessed",
      description:
        "Every decision we make starts with our customers. Their success is our success.",
    },
    {
      icon: Heart,
      title: "Radically transparent",
      description:
        "No hidden fees, no fine print. We believe in honest, upfront pricing and communication.",
    },
    {
      icon: Lightbulb,
      title: "Innovation driven",
      description:
        "We constantly push boundaries to make international finance simpler and more accessible.",
    },
    {
      icon: Shield,
      title: "Trust first",
      description:
        "Security and compliance aren't afterthoughts - they're built into everything we do.",
    },
    {
      icon: Zap,
      title: "Speed matters",
      description:
        "In a connected world, financial services should be instant, not take days or weeks.",
    },
  ];

  const impact = [
    {
      metric: "$120B+",
      description:
        "Total money transferred, helping families and businesses worldwide",
    },
    {
      metric: "16M+",
      description: "People trust FlowPay with their international money needs",
    },
    {
      metric: "80+",
      description: "Countries connected through our platform",
    },
    {
      metric: "$2.5B+",
      description: "Saved in fees compared to traditional banks",
    },
  ];

  const goals = [
    {
      title: "Financial inclusion",
      description:
        "Make international financial services accessible to everyone, regardless of their location or economic status.",
      progress: 75,
    },
    {
      title: "Real-time transfers",
      description:
        "Enable instant money transfers to every country in the world, 24/7.",
      progress: 60,
    },
    {
      title: "Zero hidden fees",
      description:
        "Eliminate all hidden costs and provide complete transparency in international finance.",
      progress: 90,
    },
    {
      title: "Global coverage",
      description:
        "Expand our services to reach every corner of the world where people need to move money.",
      progress: 45,
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <Target className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Our Mission
            </h1>
          </div>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            To make money without borders the new normal for everyone,
            everywhere.
          </p>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We believe that in a connected world, moving money internationally
            should be as easy as sending an email. Fair, fast, and transparent.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 mb-20 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">Our vision</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "A world where anyone can send, spend, and receive money
            internationally with the same ease and fairness as they do
            domestically. Where financial borders don't limit human potential,
            and where transparent, customer-first financial services are the
            standard, not the exception."
          </p>
        </motion.div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-white text-center mb-12">
            What drives us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-lime-400/10 border border-lime-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="text-lime-400" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-white text-center mb-12">
            Our impact so far
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-lime-400 mb-4">
                  {item.metric}
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Goals & Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-white text-center mb-12">
            What we're working toward
          </h2>

          <div className="space-y-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                      {goal.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-lime-400 mb-1">
                      {goal.progress}%
                    </div>
                    <div className="text-slate-400 text-sm">Progress</div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                    className="bg-gradient-to-r from-lime-400 to-emerald-400 h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Join our mission
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Be part of the movement to make international finance fair,
            transparent, and accessible to everyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <span>Start your journey</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center space-x-3"
              >
                <Users size={20} />
                <span>Work with us</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionPage;

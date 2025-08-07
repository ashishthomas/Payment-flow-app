import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Heart, ArrowRight, Target, Eye, Zap } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { value: "16M+", label: "Customers worldwide" },
    { value: "$120B+", label: "Money transferred" },
    { value: "80+", label: "Countries supported" },
    { value: "2011", label: "Year founded" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-driven",
      description:
        "We believe money without borders should be the new normal for everyone, everywhere.",
    },
    {
      icon: Eye,
      title: "Transparent",
      description:
        "No hidden fees, no surprises. We show you exactly what you pay and why.",
    },
    {
      icon: Zap,
      title: "Innovative",
      description:
        "We use cutting-edge technology to make international money transfers fast and secure.",
    },
    {
      icon: Heart,
      title: "Customer-first",
      description:
        "Every decision we make is guided by what's best for our customers and their financial needs.",
    },
  ];

  const timeline = [
    {
      year: "2011",
      title: "FlowPay founded",
      description:
        "Started with a simple mission: make international money transfers fair and transparent.",
    },
    {
      year: "2013",
      title: "First million customers",
      description:
        "Reached our first major milestone with customers across 20 countries.",
    },
    {
      year: "2016",
      title: "Multi-currency accounts",
      description:
        "Launched borderless accounts, allowing customers to hold money in multiple currencies.",
    },
    {
      year: "2018",
      title: "FlowPay card launch",
      description:
        "Introduced our debit card, enabling customers to spend their money anywhere in the world.",
    },
    {
      year: "2020",
      title: "Business solutions",
      description:
        "Expanded to serve businesses with comprehensive international payment solutions.",
    },
    {
      year: "2022",
      title: "Platform API",
      description:
        "Opened our platform to developers, enabling third-party integrations and innovations.",
    },
    {
      year: "2024",
      title: "16M+ customers",
      description:
        "Continuing to grow and serve customers in 80+ countries worldwide.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Goldman Sachs executive with 15+ years in fintech.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-founder",
      bio: "Ex-Google engineer passionate about financial technology.",
      avatar: "👨‍💻",
    },
    {
      name: "Priya Patel",
      role: "Head of Product",
      bio: "Product leader focused on customer experience and innovation.",
      avatar: "👩‍💻",
    },
    {
      name: "James Wilson",
      role: "Head of Compliance",
      bio: "Regulatory expert ensuring FlowPay meets global standards.",
      avatar: "👨‍💼",
    },
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
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            About <span className="text-lime-400 font-medium">FlowPay</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We're building the best way to move and manage the world's money.
            Making money without borders the new normal.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-lime-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 mb-20 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Our mission
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "We believe that money without borders should be the new normal.
            We're building the best way to move and manage the world's money,
            making international finance fair, transparent, and accessible to
            everyone."
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-white text-center mb-12">
            Our values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-lime-400/10 border border-lime-400/30 rounded-2xl flex items-center justify-center">
                    <value.icon className="text-lime-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-white text-center mb-12">
            Our journey
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lime-400/30 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg flex-shrink-0">
                    {event.year}
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-400">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-white text-center mb-12">
            Leadership team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-lime-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Join our mission
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Be part of the financial revolution. Help us make money without
            borders the new normal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
              >
                <Users size={20} />
                <span>Join our team</span>
              </motion.button>
            </Link>

            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center space-x-3"
              >
                <span>Become a customer</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

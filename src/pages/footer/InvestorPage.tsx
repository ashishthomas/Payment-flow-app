import { motion } from "framer-motion";
import {
  TrendingUp,
  FileText,
  Calendar,
  Download,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  financialHighlights,
  reports,
  upcomingEvents,
  keyMetrics,
} from "../../data/InvestorData";

const InvestorPage = () => {
  const handleDownload = (reportTitle: string) => {
    toast.success(`Downloading ${reportTitle}...`);
  };

  const handleContactIR = () => {
    toast.success("Redirecting to investor relations contact form...");
  };

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
            <TrendingUp className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Investor Relations
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building the future of international finance. Discover our growth
            story, financial performance, and investment opportunities.
          </p>
        </motion.div>

        {/* Financial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Financial Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-lime-400 mb-2">
                  {item.metric}
                </div>
                <div className="text-slate-300 mb-2">{item.label}</div>
                <div className="text-emerald-400 text-sm font-semibold">
                  {item.change} YoY
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Key Performance Metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {metric.title}
                  </h3>
                  <div className="text-3xl font-bold text-lime-400">
                    {metric.value}
                  </div>
                </div>
                <p className="text-slate-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Reports & Documents */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-8">
              Reports & Documents
            </h2>

            <div className="space-y-4">
              {reports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-xl flex items-center justify-center">
                        <FileText className="text-lime-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {report.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-slate-400 text-sm">
                          <span>{report.type}</span>
                          <span>{report.date}</span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(report.title)}
                      className="bg-lime-400 text-slate-900 p-3 rounded-full hover:bg-lime-300 transition-colors"
                    >
                      <Download size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-8">
              Upcoming Events
            </h2>

            <div className="space-y-4 mb-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-xl flex items-center justify-center">
                      <Calendar className="text-lime-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {event.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-slate-400 text-sm">
                        <span>{event.type}</span>
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact IR */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Investor Relations Contact
              </h3>
              <p className="text-slate-400 mb-6">
                Have questions about our financial performance or investment
                opportunities? Our IR team is here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-lime-400" size={20} />
                  <span className="text-slate-300">investors@flowpay.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-lime-400" size={20} />
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactIR}
                className="w-full bg-lime-400 text-slate-900 py-3 rounded-xl font-semibold hover:bg-lime-300 transition-colors mt-6 flex items-center justify-center space-x-2"
              >
                <span>Contact IR Team</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Investment Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Investment Thesis
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            FlowPay is positioned at the forefront of the $150 trillion global
            payments market. With our innovative technology, customer-first
            approach, and expanding global presence, we're building the
            infrastructure for the future of international finance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Market Opportunity
              </h3>
              <p className="text-slate-400">
                Massive addressable market with traditional players charging
                excessive fees and providing poor customer experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Competitive Advantage
              </h3>
              <p className="text-slate-400">
                Real exchange rates, transparent pricing, and superior
                technology creating strong customer loyalty and network effects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Growth Strategy
              </h3>
              <p className="text-slate-400">
                Expanding into new markets, launching innovative products, and
                building platform partnerships to accelerate growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorPage;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { termsSections } from "../../data/TermsData";

const TermsPage = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Service Agreement",
      description:
        "These terms govern your use of FlowPay services and create a legal agreement between you and FlowPay.",
    },
    {
      icon: Scale,
      title: "Your Rights",
      description:
        "You retain ownership of your funds and have the right to access, transfer, and withdraw your money.",
    },
    {
      icon: AlertTriangle,
      title: "Your Responsibilities",
      description:
        "You must provide accurate information, comply with laws, and use our services responsibly.",
    },
    {
      icon: FileText,
      title: "Service Changes",
      description:
        "We may update our services and terms, with advance notice for material changes.",
    },
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <Scale className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of FlowPay services. Please read them
            carefully as they contain important information about your rights
            and obligations.
          </p>
          <div className="text-slate-500 mt-4">
            Last updated: January 15, 2024
          </div>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Key Points
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-xl flex items-center justify-center">
                    <point.icon className="text-lime-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terms Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center space-x-4">
                  <FileText className="text-lime-400" size={24} />
                  <span className="text-xl font-semibold text-white">
                    {section.title}
                  </span>
                </div>
                {expandedSection === index ? (
                  <ChevronDown className="text-lime-400" size={24} />
                ) : (
                  <ChevronRight className="text-slate-400" size={24} />
                )}
              </button>

              {expandedSection === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-6"
                >
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center mt-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service or need
            clarification on any provision, please don't hesitate to contact us.
          </p>

          <div className="space-y-4 text-slate-300">
            <div>
              <strong>Legal Team:</strong> legal@flowpay.com
            </div>
            <div>
              <strong>Customer Support:</strong> support@flowpay.com
            </div>
            <div>
              <strong>Mailing Address:</strong> FlowPay Legal Department, 123
              Financial District, New York, NY 10004
            </div>
            <div>
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { privacySections } from "../../data/PrivacyData";

const PrivacyPage = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description:
        "We use industry-leading security measures to protect your personal information.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We clearly explain what data we collect, why we collect it, and how we use it.",
    },
    {
      icon: Lock,
      title: "Control",
      description:
        "You have control over your data and can request access, correction, or deletion.",
    },
    {
      icon: Users,
      title: "Limited Sharing",
      description:
        "We never sell your data and only share it when necessary for our services.",
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
            <Shield className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Your privacy is fundamental to how we operate. This policy explains
            how we collect, use, and protect your personal information.
          </p>
          <div className="text-slate-500 mt-4">
            Last updated: January 15, 2024
          </div>
        </motion.div>

        {/* Privacy Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Our Privacy Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-xl flex items-center justify-center">
                    <principle.icon className="text-lime-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Policy Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {privacySections.map((section, index) => (
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
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or how we handle
            your personal information, we're here to help.
          </p>

          <div className="space-y-4 text-slate-300">
            <div>
              <strong>Data Protection Officer:</strong> privacy@flowpay.com
            </div>
            <div>
              <strong>Mailing Address:</strong> FlowPay Privacy Team, 123
              Financial District, New York, NY 10004
            </div>
            <div>
              <strong>Phone:</strong> +1 (555) 123-PRIVACY
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;

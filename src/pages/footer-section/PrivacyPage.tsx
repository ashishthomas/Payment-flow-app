import React, { useState } from "react";
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

  const privacySections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, make a transaction, or contact us for support. This includes:

• Personal identification information (name, email, phone number, address)
• Financial information (bank account details, transaction history)
• Identity verification documents (government-issued ID, proof of address)
• Device and usage information (IP address, browser type, app usage patterns)
• Communication records (customer support interactions, survey responses)

We also collect information automatically through your use of our services, including transaction data, device information, and usage analytics to improve our platform and detect fraud.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use your information to provide, maintain, and improve our services:

• Processing transactions and managing your account
• Verifying your identity and preventing fraud
• Complying with legal and regulatory requirements
• Providing customer support and responding to inquiries
• Sending important service updates and notifications
• Improving our products and developing new features
• Conducting research and analytics to enhance user experience

We may also use your information for marketing purposes, but only with your consent, and you can opt out at any time.`,
    },
    {
      title: "Information Sharing and Disclosure",
      content: `We do not sell, rent, or trade your personal information. We may share your information in limited circumstances:

• With service providers who help us operate our business (payment processors, identity verification services, cloud storage providers)
• With financial institutions to process transactions
• With regulatory authorities and law enforcement when required by law
• With your consent for specific purposes
• In connection with a business transaction (merger, acquisition, or sale of assets)
• To protect our rights, property, or safety, or that of our users

All third parties we work with are contractually obligated to protect your information and use it only for specified purposes.`,
    },
    {
      title: "Data Security",
      content: `We implement comprehensive security measures to protect your information:

• Encryption of data in transit and at rest using industry-standard protocols
• Multi-factor authentication and access controls
• Regular security audits and penetration testing
• Employee training on data protection and security best practices
• Incident response procedures for potential security breaches
• Compliance with international security standards (ISO 27001, SOC 2)

While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We continuously monitor and update our security practices to address emerging threats.`,
    },
    {
      title: "Your Rights and Choices",
      content: `You have several rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information (subject to legal requirements)
• Portability: Request transfer of your data to another service provider
• Restriction: Request limitation of how we process your information
• Objection: Object to certain types of processing
• Withdraw consent: Withdraw consent for marketing communications or other optional services

To exercise these rights, contact us through the methods provided in this policy. We will respond to your request within 30 days.`,
    },
    {
      title: "International Transfers",
      content: `FlowPay operates globally, and your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.

When we transfer your information internationally, we ensure appropriate safeguards are in place:

• Standard contractual clauses approved by relevant authorities
• Adequacy decisions recognizing equivalent protection levels
• Certification schemes and codes of conduct
• Binding corporate rules for intra-group transfers

We only transfer your information to countries and organizations that provide adequate protection for your personal data.`,
    },
    {
      title: "Retention and Deletion",
      content: `We retain your personal information only as long as necessary for the purposes outlined in this policy:

• Account information: Retained while your account is active and for 7 years after closure for regulatory compliance
• Transaction records: Retained for 7 years for financial and regulatory requirements
• Identity verification documents: Retained for 7 years after account closure
• Marketing communications: Until you unsubscribe or object
• Support communications: Retained for 3 years for quality assurance

After the retention period expires, we securely delete or anonymize your information. Some information may be retained longer if required by law or for legitimate business purposes.`,
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar technologies to enhance your experience:

• Essential cookies: Required for basic functionality (login, security, preferences)
• Analytics cookies: Help us understand how you use our services
• Marketing cookies: Used to deliver relevant advertisements
• Third-party cookies: From partners who help us provide our services

You can control cookies through your browser settings, but disabling certain cookies may affect functionality. Our Cookie Policy provides detailed information about the cookies we use and how to manage them.`,
    },
    {
      title: "Children's Privacy",
      content: `FlowPay services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.

If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly. If you believe we have collected information from a child under 18, please contact us immediately.

Parents and guardians should monitor their children's internet usage and help enforce this policy by instructing children never to provide personal information through our services without permission.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors.

When we make changes:

• We will post the updated policy on our website
• We will update the "Last Updated" date at the top of the policy
• For material changes, we will provide additional notice (email notification, in-app notification, or prominent website notice)
• We may require your consent for certain changes that significantly affect how we use your information

We encourage you to review this policy regularly to stay informed about how we protect your information.`,
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

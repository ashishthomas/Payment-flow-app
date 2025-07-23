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

  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing or using FlowPay services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.

These terms apply to all users of FlowPay services, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.

Your use of our services is also governed by our Privacy Policy, which is incorporated into these terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.

We reserve the right to refuse service to anyone for any reason at any time, subject to applicable law.`,
    },
    {
      title: "Account Registration and Eligibility",
      content: `To use FlowPay services, you must:

• Be at least 18 years old (or the age of majority in your jurisdiction)
• Provide accurate, current, and complete information during registration
• Maintain and update your account information
• Be legally authorized to enter into this agreement
• Not be prohibited from using our services under applicable laws

You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.

We may require additional verification before allowing certain transactions or account activities. This may include providing government-issued identification, proof of address, or other documentation.

You may only maintain one personal account. Business accounts are subject to additional terms and verification requirements.`,
    },
    {
      title: "Services Description",
      content: `FlowPay provides international money transfer and multi-currency account services, including:

• International money transfers to individuals and businesses
• Multi-currency account services with local bank details
• Debit card services for international spending
• Currency exchange at real market rates
• Business payment solutions and API services

Our services are subject to availability in your jurisdiction and compliance with applicable laws and regulations. Some services may not be available in all countries or to all users.

We reserve the right to modify, suspend, or discontinue any service at any time, with or without notice, though we will provide reasonable advance notice for material changes that affect your use of our services.

Service availability and features may vary by country and are subject to local regulatory requirements.`,
    },
    {
      title: "Fees and Charges",
      content: `FlowPay charges fees for certain services, which are clearly disclosed before you complete any transaction:

• Transfer fees: Clearly shown before you send money
• Exchange rate margins: We use the real exchange rate with no markup
• Card fees: Monthly fees, ATM withdrawal fees, and replacement fees as applicable
• Account fees: Most account services are free, with some premium features subject to fees

All fees are disclosed in your local currency before you authorize any transaction. You will receive a receipt showing all fees charged.

We reserve the right to change our fee structure with 30 days' advance notice. Fee changes will not affect transactions already in progress.

If you believe you have been charged incorrectly, please contact our customer support team within 60 days of the transaction.

Refunds are subject to our refund policy and applicable law.`,
    },
    {
      title: "Prohibited Uses",
      content: `You may not use FlowPay services for any unlawful purpose or to solicit others to perform unlawful acts. Prohibited uses include, but are not limited to:

• Money laundering or terrorist financing
• Fraud, including identity theft or payment fraud
• Transactions involving illegal goods or services
• Gambling or betting activities (where prohibited)
• Adult content or services
• Pyramid schemes or multi-level marketing
• Transactions that violate intellectual property rights
• Any activity that violates applicable laws or regulations

We monitor transactions for suspicious activity and may suspend or terminate accounts that violate these terms. We are required to report suspicious activities to relevant authorities.

If we suspect prohibited use, we may freeze your account and funds pending investigation. We will cooperate with law enforcement agencies as required by law.

Violation of these terms may result in immediate account termination and forfeiture of funds, subject to applicable law.`,
    },
    {
      title: "Transaction Processing",
      content: `When you initiate a transaction through FlowPay:

• You authorize us to process the payment according to your instructions
• Transactions are generally processed within minutes to hours, but may take longer due to security checks, regulatory requirements, or technical issues
• Once a transaction is initiated, it may not be possible to cancel or modify it
• We may delay or refuse transactions that appear suspicious or violate these terms
• Exchange rates are locked in when you authorize the transaction

For international transfers:
• Recipient information must be accurate and complete
• Some countries have restrictions on incoming transfers
• Additional documentation may be required for large transfers
• Transfer times may vary by destination country and payment method

We are not responsible for delays caused by recipient banks, regulatory holds, or circumstances beyond our control.

If a transaction fails, we will refund your money according to our refund policy.`,
    },
    {
      title: "Account Suspension and Termination",
      content: `We may suspend or terminate your account at any time for any reason, including:

• Violation of these terms of service
• Suspicious or fraudulent activity
• Failure to provide required verification documents
• Regulatory or legal requirements
• Risk management purposes

If your account is suspended:
• You will not be able to access your account or initiate new transactions
• Pending transactions may be delayed or cancelled
• We will investigate the reason for suspension and may request additional information

If your account is terminated:
• You will lose access to all FlowPay services
• We will return your funds according to applicable law and our policies
• Some funds may be held for regulatory or legal reasons

You may terminate your account at any time by contacting customer support. Upon termination, you remain liable for any outstanding obligations.

We will provide reasonable notice of account actions unless immediate action is required for security or legal reasons.`,
    },
    {
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, FlowPay's liability is limited as follows:

• We are not liable for indirect, incidental, special, or consequential damages
• Our total liability for any claim is limited to the amount of the specific transaction in question
• We are not liable for delays or failures caused by circumstances beyond our control
• We are not responsible for the actions of third parties, including recipient banks

We provide our services "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.

Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so these limitations may not apply to you.

Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.

You agree to indemnify and hold FlowPay harmless from any claims arising from your use of our services or violation of these terms.`,
    },
    {
      title: "Dispute Resolution",
      content: `We encourage you to contact us first to resolve any disputes. Most issues can be resolved quickly through our customer support team.

If we cannot resolve a dispute through customer support:

• You may file a complaint with relevant regulatory authorities
• Disputes may be subject to binding arbitration as permitted by law
• You may have the right to pursue claims in small claims court
• Class action waivers may apply where permitted by law

For disputes involving unauthorized transactions:
• Report unauthorized transactions immediately
• We will investigate and provide provisional credit as required by law
• Final resolution depends on the outcome of our investigation

Governing Law:
• These terms are governed by the laws of [Jurisdiction]
• Any legal proceedings must be brought in the courts of [Jurisdiction]
• If any provision of these terms is found unenforceable, the remaining provisions remain in effect

Time limits may apply to dispute resolution, so please contact us promptly if you have concerns.`,
    },
    {
      title: "Changes to Terms",
      content: `We may revise these terms of service at any time without prior notice by updating this posting. By using FlowPay services, you agree to be bound by the current version of these terms.

When we make changes:
• We will post the updated terms on our website
• We will update the "Last Updated" date
• For material changes, we will provide additional notice through email, in-app notifications, or prominent website notices
• Continued use of our services after changes constitutes acceptance of the new terms

If you do not agree to modified terms:
• You should discontinue use of our services
• You may close your account
• Existing transactions will be completed under the previous terms

We recommend reviewing these terms periodically to stay informed of any changes.

Material changes that significantly affect your rights or obligations will include a reasonable notice period before taking effect.`,
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

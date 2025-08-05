// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Search,
//   MessageCircle,
//   Phone,
//   Mail,
//   ChevronDown,
//   ChevronRight,
// } from "lucide-react";

// const HelpPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "How do I send money internationally?",
//       answer:
//         "You can send money through our app or website. Simply enter the recipient details, amount, and payment method. We'll show you the exact fees and exchange rate before you confirm.",
//     },
//     {
//       question: "What are your fees?",
//       answer:
//         "Our fees are transparent and competitive. For most transfers, we charge a small fixed fee plus the real exchange rate with no markup. Check our fee calculator for exact costs.",
//     },
//     {
//       question: "How long do transfers take?",
//       answer:
//         "Most transfers arrive within minutes to a few hours. Bank transfers may take 1-2 business days depending on the destination country and payment method.",
//     },
//     {
//       question: "Is my money safe with FlowPay?",
//       answer:
//         "Yes, your money is protected by bank-level security, regulatory compliance, and deposit insurance up to applicable limits. We're regulated in multiple countries.",
//     },
//     {
//       question: "Can I get a FlowPay debit card?",
//       answer:
//         "Yes, our multi-currency debit card lets you spend in 175+ countries at the real exchange rate with no foreign transaction fees.",
//     },
//     {
//       question: "How do I verify my account?",
//       answer:
//         "Account verification typically requires a government-issued ID and proof of address. The process is usually completed within 24 hours.",
//     },
//   ];

//   const contactOptions = [
//     {
//       icon: MessageCircle,
//       title: "Live Chat",
//       description: "Get instant help from our support team",
//       action: "Start chat",
//       available: "24/7",
//     },
//     {
//       icon: Phone,
//       title: "Phone Support",
//       description: "Speak directly with a support specialist",
//       action: "Call now",
//       available: "Mon-Fri 9AM-6PM",
//     },
//     {
//       icon: Mail,
//       title: "Email Support",
//       description: "Send us a detailed message",
//       action: "Send email",
//       available: "Response within 24h",
//     },
//   ];

//   const filteredFaqs = faqs.filter(
//     (faq) =>
//       faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="pt-32 pb-16">
//       <div className="max-w-4xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
//             How can we <span className="text-lime-400 font-medium">help?</span>
//           </h1>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
//             Find answers to common questions or get in touch with our support
//             team.
//           </p>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="relative mb-12"
//         >
//           <Search
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
//             size={20}
//           />
//           <input
//             type="text"
//             placeholder="Search for help..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none"
//           />
//         </motion.div>

//         {/* Contact Options */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
//         >
//           {contactOptions.map((option, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -5 }}
//               className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center cursor-pointer hover:bg-slate-800/70 transition-all duration-300"
//               onClick={() => {
//                 if (option.title === "Live Chat") {
//                   // Simulate opening chat
//                   alert("Chat feature would open here");
//                 } else if (option.title === "Phone Support") {
//                   window.open("tel:+1-800-FLOWPAY");
//                 } else {
//                   window.open("mailto:support@flowpay.com");
//                 }
//               }}
//             >
//               <div className="w-16 h-16 bg-lime-400/10 border border-lime-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <option.icon className="text-lime-400" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {option.title}
//               </h3>
//               <p className="text-slate-400 mb-4">{option.description}</p>
//               <div className="text-lime-400 font-medium mb-2">
//                 {option.action}
//               </div>
//               <div className="text-slate-500 text-sm">{option.available}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <h2 className="text-3xl font-semibold text-white mb-8 text-center">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-4">
//             {filteredFaqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden"
//               >
//                 <button
//                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
//                   onClick={() =>
//                     setExpandedFaq(expandedFaq === index ? null : index)
//                   }
//                 >
//                   <span className="text-white font-medium">{faq.question}</span>
//                   {expandedFaq === index ? (
//                     <ChevronDown className="text-lime-400" size={20} />
//                   ) : (
//                     <ChevronRight className="text-slate-400" size={20} />
//                   )}
//                 </button>

//                 {expandedFaq === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="px-6 pb-4"
//                   >
//                     <p className="text-slate-400 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {filteredFaqs.length === 0 && searchQuery && (
//             <div className="text-center py-12">
//               <p className="text-slate-400">
//                 No results found for "{searchQuery}". Try a different search
//                 term or contact support.
//               </p>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HelpPage;

//=================================================================================================================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const HelpPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I send money internationally?",
      answer:
        "You can send money through our app or website. Simply enter the recipient details, amount, and payment method. We'll show you the exact fees and exchange rate before you confirm.",
    },
    {
      question: "What are your fees?",
      answer:
        "Our fees are transparent and competitive. For most transfers, we charge a small fixed fee plus the real exchange rate with no markup. Check our fee calculator for exact costs.",
    },
    {
      question: "How long do transfers take?",
      answer:
        "Most transfers arrive within minutes to a few hours. Bank transfers may take 1-2 business days depending on the destination country and payment method.",
    },
    {
      question: "Is my money safe with FlowPay?",
      answer:
        "Yes, your money is protected by bank-level security, regulatory compliance, and deposit insurance up to applicable limits. We're regulated in multiple countries.",
    },
    {
      question: "Can I get a FlowPay debit card?",
      answer:
        "Yes, our multi-currency debit card lets you spend in 175+ countries at the real exchange rate with no foreign transaction fees.",
    },
    {
      question: "How do I verify my account?",
      answer:
        "Account verification typically requires a government-issued ID and proof of address. The process is usually completed within 24 hours.",
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start chat",
      available: "24/7",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      action: "Call now",
      available: "Mon-Fri 9AM-6PM",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send email",
      available: "Response within 24h",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            How can we <span className="text-lime-400 font-medium">help?</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions or get in touch with our support
            team.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12"
        >
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none"
          />
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center cursor-pointer hover:bg-slate-800/70 transition-all duration-300"
              onClick={() => {
                if (option.title === "Live Chat") {
                  navigate("/chat"); // ✅ navigate to chat page
                } else if (option.title === "Phone Support") {
                  window.open("tel:+1-800-FLOWPAY");
                } else {
                  window.open("mailto:support@flowpay.com");
                }
              }}
            >
              <div className="w-16 h-16 bg-lime-400/10 border border-lime-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <option.icon className="text-lime-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-slate-400 mb-4">{option.description}</p>
              <div className="text-lime-400 font-medium mb-2">
                {option.action}
              </div>
              <div className="text-slate-500 text-sm">{option.available}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="text-lime-400" size={20} />
                  ) : (
                    <ChevronRight className="text-slate-400" size={20} />
                  )}
                </button>

                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-slate-400">
                No results found for "{searchQuery}". Try a different search
                term or contact support.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HelpPage;

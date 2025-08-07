import  { useState } from "react";
import { motion } from "framer-motion";
import {
  Cookie,
  Settings,
  Eye,
  BarChart,
  Target,
  Shield,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import toast from "react-hot-toast";

const CookiesPage = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: true,
    marketing: false,
    personalization: true,
  });

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description:
        "Required for basic website functionality and security. Cannot be disabled.",
      required: true,
      examples: [
        "Login sessions",
        "Security tokens",
        "Form submissions",
        "Language preferences",
      ],
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      description:
        "Help us understand how visitors use our website to improve user experience.",
      required: false,
      examples: [
        "Page views",
        "User interactions",
        "Error tracking",
        "Performance metrics",
      ],
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      description:
        "Used to deliver relevant advertisements and track campaign effectiveness.",
      required: false,
      examples: [
        "Ad targeting",
        "Campaign tracking",
        "Social media integration",
        "Retargeting",
      ],
    },
    {
      icon: Eye,
      title: "Personalization Cookies",
      description:
        "Remember your preferences to provide a customized experience.",
      required: false,
      examples: [
        "Theme preferences",
        "Dashboard layout",
        "Notification settings",
        "Currency display",
      ],
    },
  ];

  const cookieSections = [
    {
      title: "What Are Cookies?",
      content: `Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.

Cookies contain information about your browsing activity and preferences. They help websites remember your settings, keep you logged in, and provide personalized experiences.

There are different types of cookies:
• Session cookies: Temporary cookies that are deleted when you close your browser
• Persistent cookies: Remain on your device for a set period or until manually deleted
• First-party cookies: Set by the website you're visiting
• Third-party cookies: Set by external services integrated into the website

FlowPay uses cookies to enhance your experience, improve our services, and ensure the security of your account.`,
    },
    {
      title: "How We Use Cookies",
      content: `FlowPay uses cookies for several important purposes:

Security and Authentication:
• Maintaining your login session securely
• Protecting against fraud and unauthorized access
• Implementing two-factor authentication
• Detecting suspicious activity

Functionality:
• Remembering your language and currency preferences
• Saving your dashboard customizations
• Maintaining your notification settings
• Enabling core website features

Performance and Analytics:
• Measuring website performance and load times
• Understanding how users navigate our site
• Identifying and fixing technical issues
• Optimizing user experience

Marketing and Personalization:
• Delivering relevant content and offers
• Measuring advertising campaign effectiveness
• Providing personalized recommendations
• Enabling social media integration

We only use cookies that are necessary for these purposes and in accordance with applicable privacy laws.`,
    },
    {
      title: "Third-Party Cookies",
      content: `Some cookies on our website are set by third-party services that we use to enhance your experience:

Analytics Services:
• Google Analytics: Helps us understand website usage and performance
• Hotjar: Provides insights into user behavior and experience
• Mixpanel: Tracks user interactions for product improvement

Marketing and Advertising:
• Google Ads: Enables targeted advertising and conversion tracking
• Facebook Pixel: Allows us to measure ad effectiveness on social media
• LinkedIn Insight Tag: Helps with professional network advertising

Customer Support:
• Intercom: Powers our customer support chat functionality
• Zendesk: Manages customer support tickets and interactions

Payment Processing:
• Stripe: Handles secure payment processing
• PayPal: Enables alternative payment methods

These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies to understand how they use cookies and personal data.

We regularly review our third-party integrations to ensure they meet our privacy and security standards.`,
    },
    {
      title: "Managing Your Cookie Preferences",
      content: `You have several options for managing cookies on our website:

Browser Settings:
• Most browsers allow you to view, manage, and delete cookies
• You can set your browser to block all cookies or only third-party cookies
• You can configure your browser to notify you when cookies are being set
• Note that blocking essential cookies may affect website functionality

FlowPay Cookie Preferences:
• Use our cookie preference center to customize your settings
• Choose which types of non-essential cookies you want to allow
• Your preferences are saved and respected across your visits
• You can change your preferences at any time

Opt-Out Tools:
• Google Analytics Opt-out Browser Add-on
• Network Advertising Initiative opt-out tool
• Digital Advertising Alliance opt-out tool
• European Interactive Digital Advertising Alliance opt-out tool

Mobile Devices:
• iOS: Settings > Privacy & Security > Tracking
• Android: Settings > Privacy > Ads
• Adjust your device's advertising identifier settings

Remember that disabling certain cookies may limit your ability to use some features of our website.`,
    },
    {
      title: "Cookie Retention",
      content: `Different cookies have different retention periods based on their purpose:

Session Cookies:
• Deleted automatically when you close your browser
• Used for temporary functionality like shopping carts or form data
• Essential for maintaining secure login sessions

Short-term Cookies (1-30 days):
• Remember recent preferences and settings
• Track short-term user interactions
• Support temporary promotional campaigns

Medium-term Cookies (1-12 months):
• Store user preferences and customizations
• Support analytics and performance monitoring
• Enable personalized content delivery

Long-term Cookies (1-2 years):
• Remember long-term user preferences
• Support marketing attribution and campaign measurement
• Enable cross-device recognition for consistent experience

We regularly review and clean up expired cookies to minimize data storage. You can delete cookies manually through your browser settings at any time.

Some cookies may be refreshed or extended when you interact with our website, ensuring continued functionality while respecting the original retention period.`,
    },
    {
      title: "International Cookie Laws",
      content: `FlowPay complies with cookie laws and regulations worldwide:

European Union (GDPR and ePrivacy):
• We obtain consent before setting non-essential cookies
• We provide clear information about cookie purposes
• You can withdraw consent at any time
• We maintain records of consent for compliance

United Kingdom (UK GDPR and PECR):
• Similar requirements to EU regulations
• Specific rules for electronic communications
• Enhanced user control over cookie preferences

California (CCPA and CPRA):
• We respect "Do Not Track" signals where applicable
• We provide opt-out mechanisms for data sales
• We offer transparency about data collection practices

Other Jurisdictions:
• We monitor and comply with emerging cookie laws globally
• We adapt our practices to meet local requirements
• We provide appropriate notices and controls for all users

Our cookie practices are designed to meet the highest international standards for privacy and user control.

We regularly update our cookie policy to reflect changes in laws and regulations.`,
    },
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === "essential") return; // Essential cookies cannot be disabled

    setCookiePreferences((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const savePreferences = () => {
    // In a real application, this would save preferences to cookies/localStorage
    // and update the website's cookie behavior accordingly
    toast.success("Cookie preferences saved successfully!");
  };

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-3 mb-6">
            <Cookie className="text-lime-400" size={48} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-center">
              Cookie Policy
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Learn about how FlowPay uses cookies to enhance your experience,
            improve our services, and protect your account.
          </p>
          <div className="text-slate-500 mt-4">
            Last updated: January 15, 2024
          </div>
        </motion.div>

        {/* Cookie Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="text-lime-400" size={32} />
              <h2 className="text-3xl font-semibold text-white">
                Cookie Preferences
              </h2>
            </div>

            <p className="text-slate-400 mb-8">
              Customize your cookie preferences below. Essential cookies are
              required for basic functionality and cannot be disabled.
            </p>

            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 rounded-2xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-xl flex items-center justify-center">
                        <type.icon className="text-lime-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {type.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {type.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {type.required ? (
                        <span className="text-slate-500 text-sm">Required</span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={
                              cookiePreferences[
                                type.title
                                  .toLowerCase()
                                  .split(
                                    " "
                                  )[0] as keyof typeof cookiePreferences
                              ]
                            }
                            onChange={(e) =>
                              handlePreferenceChange(
                                type.title.toLowerCase().split(" ")[0],
                                e.target.checked
                              )
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-400"></div>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="ml-16">
                    <h4 className="text-white font-medium mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {type.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-600/50 text-slate-300 px-3 py-1 rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={savePreferences}
                className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors"
              >
                Save Preferences
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Cookie Policy Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {cookieSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-4 sm:px-8 py-6 text-left flex flex-wrap items-center justify-between gap-3 hover:bg-slate-800/70 transition-colors"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center space-x-4">
                  <Cookie className="text-lime-400" size={24} />
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
                  className="px-4 sm:px-8 pb-6"
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
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-6 sm:p-10 text-center mt-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            If you have any questions about our use of cookies or need help
            managing your preferences, we're here to assist you.
          </p>

          <div className="space-y-4 text-slate-300">
            <div>
              <strong>Privacy Team:</strong> privacy@flowpay.com
            </div>
            <div>
              <strong>Customer Support:</strong> support@flowpay.com
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

export default CookiesPage;

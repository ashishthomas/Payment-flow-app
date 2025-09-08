export const HelpPageText = {
  title: "How can we ",
  highlight: "help?",
  subtitle: "Find answers to common questions or get in touch with our support team.",
  searchPlaceholder: "Search for help...",
  contactOptions: [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start chat",
      available: "24/7",
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      action: "Call now",
      available: "Mon-Fri 9AM-6PM",
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send email",
      available: "Response within 24h",
    },
  ],
  faqTitle: "Frequently Asked Questions",
  noResults: (query: string) =>
    `No results found for "${query}". Try a different search term or contact support.`,
};
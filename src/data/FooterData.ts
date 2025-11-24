import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export const socialLinks = [
  {
    icon: Twitter,
    url: "https://twitter.com/yourprofile",
    label: "Twitter",
  },
  {
    icon: Facebook,
    url: "https://facebook.com/yourprofile",
    label: "Facebook",
  },
  {
    icon: Instagram,
    url: "https://instagram.com/yourprofile",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
  },
];

export const languageOptions = ["English", "Español", "Hindi", "Français"];

export const footerLinks = {
  "Send money": [
    { label: "Send money online", path: "/send-money" },
    { label: "Send money to India", path: "/send-money?country=india" },
    { label: "Send money to Philippines", path: "/send-money?country=philippines" },
    { label: "Send money to Mexico", path: "/send-money?country=mexico" },
    { label: "Send money to Pakistan", path: "/send-money?country=pakistan" },
  ],
  "Receive money": [
    { label: "Receive money online", path: "/receive-money" },
    { label: "Get account details", path: "/receive-money#account-details" },
    { label: "Multi-currency account", path: "/receive-money#multi-currency" },
    { label: "Large amount transfers", path: "/receive-money#large-transfers" },
    { label: "International wire", path: "/receive-money#wire-transfers" },
  ],
  "FlowPay card": [
    { label: "Debit card", path: "/card" },
    { label: "Card for travel", path: "/card#travel" },
    { label: "Card for business", path: "/card#business" },
    { label: "ATM withdrawals", path: "/card#atm" },
    { label: "Card fees", path: "/card#fees" },
  ],
  Company: [
    { label: "About us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "News", path: "/news" },
    { label: "Mission", path: "/mission" },
    { label: "Investor relations", path: "/investors" },
  ],
};

export const legalLinks = [
  { label: "Privacy policy", path: "/privacy" },
  { label: "Terms of use", path: "/terms" },
  { label: "Cookies", path: "/cookies" },
];



export const footerText = {
  brandName: "FlowPay",
  brandDescription:
    "Making money without borders the new normal. We're building the best way to move and manage the world's money.",

  copyright: "© 2025 FlowPay",
  developedBy: "Developed by Ashish Thomas",
};


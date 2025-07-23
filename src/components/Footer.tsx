import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="w-10 h-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M3 10h18m-5 9h6m-3-3l3 3l-3 3M7.005 15h.005M11 15h2"
      />
    </svg>
  </div>
);

const Footer = () => {
  const footerLinks = {
    "Send money": [
      { label: "Send money online", path: "/send-money" },
      { label: "Send money to India", path: "/send-money?country=india" },
      {
        label: "Send money to Philippines",
        path: "/send-money?country=philippines",
      },
      { label: "Send money to Mexico", path: "/send-money?country=mexico" },
      { label: "Send money to Pakistan", path: "/send-money?country=pakistan" },
    ],
    "Receive money": [
      { label: "Receive money online", path: "/receive-money" },
      { label: "Get account details", path: "/receive-money#account-details" },
      {
        label: "Multi-currency account",
        path: "/receive-money#multi-currency",
      },
      {
        label: "Large amount transfers",
        path: "/receive-money#large-transfers",
      },
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

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo />
              <span className="text-white font-semibold text-xl">FlowPay</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Making money without borders the new normal. We're building the
              best way to move and manage the world's money.
            </p>
            <div className="flex items-center space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-lime-400 hover:bg-slate-700 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-6 sm:gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left Section (Centered on Mobile) */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-start sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400">
                <Globe size={16} />
                <select className="bg-transparent text-slate-400 text-sm focus:outline-none">
                  <option>English</option>
                  <option>Español</option>
                  <option>Hindi</option>
                  <option>Français</option>
                </select>
              </div>

              <div className="text-slate-400 text-sm">© 2025 FlowPay</div>
              <div className="text-slate-400 text-sm">
                Developed by Ashish Thomas
              </div>
            </div>

            {/* Right Section (Footer Links) */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 text-slate-400 text-sm">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of use
              </Link>
              <Link
                to="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

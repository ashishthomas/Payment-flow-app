import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { memo } from "react";
import { Globe } from "lucide-react";
import {
  socialLinks,
  languageOptions,
  footerLinks,
  legalLinks,
  footerText,
} from "../data/FooterData";

const Logo = memo(() => (
  <div className="w-10 h-10" aria-label="FlowPay logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M3 10h18m-5 9h6m-3-3l3 3-3 3M7.005 15h.005M11 15h2"
      />
    </svg>
  </div>
));

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo />
              <span className="text-white font-semibold text-xl">
                {footerText.brandName}
              </span>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              {footerText.brandDescription}
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.url}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-lime-400 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
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
            {/* Language + Copyright */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-start sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400">
                <Globe size={16} aria-hidden="true" />
                <select
                  className="bg-transparent text-slate-400 text-sm focus:outline-none"
                  aria-label="Select language"
                >
                  {languageOptions.map((lang) => (
                    <option key={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div className="text-slate-400 text-sm">
                {footerText.copyright}
              </div>
              <div className="text-slate-400 text-sm">
                {footerText.developedBy}
              </div>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 text-slate-400 text-sm">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

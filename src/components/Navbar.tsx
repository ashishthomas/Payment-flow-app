import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// ✅ Fixed Logo component using dangerouslySetInnerHTML
const Logo = () => (
  <div className="w-10 h-10">
    <div
      dangerouslySetInnerHTML={{
        __html: `
<svg 
  width="100%" 
  height="100%" 
  viewBox="0 0 480 480" 
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
  <g transform="matrix(47.5579,0,0,47.5579,-142.832,-141.674)">
    <path 
      d="M8.644,11.773C7.92,11.773 7.209,11.515 6.801,10.959L6.657,11.614L4,13L4.287,11.614L6.222,3L8.591,3L7.907,6.036C8.459,5.442 8.973,5.222 9.631,5.222C11.052,5.222 12,6.14 12,7.819C12,9.551 10.908,11.773 8.644,11.773ZM9.552,8.31C9.552,9.111 8.973,9.719 8.222,9.719C7.801,9.719 7.42,9.564 7.17,9.292L7.538,7.703C7.814,7.432 8.13,7.277 8.499,7.277C9.065,7.277 9.552,7.69 9.552,8.31Z" 
      fill="white"
    />
  </g>
</svg>`,
      }}
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 right-6 transform z-50 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3"
    >
      <div className="grid grid-cols-3 items-center gap-4">
        {/* Logo - Left side */}
        <div className="flex items-center space-x-3 justify-self-start">
          <Link to="/" className="flex items-center space-x-3">
            <Logo />
            <span className="text-white font-semibold text-lg">FlowPay</span>
          </Link>
        </div>

        {/* Navigation Menu - Center */}
        <div className="hidden md:flex items-center space-x-8 justify-self-center">
          <Link
            to="/personal"
            className={`transition-colors text-sm ${
              isActive("/personal")
                ? "text-lime-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Personal
          </Link>
          <Link
            to="/business"
            className={`transition-colors text-sm ${
              isActive("/business")
                ? "text-lime-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Business
          </Link>
          <Link
            to="/platform"
            className={`transition-colors text-sm ${
              isActive("/platform")
                ? "text-lime-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Platform
          </Link>
          <Link
            to="/help"
            className={`transition-colors text-sm ${
              isActive("/help")
                ? "text-lime-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Help
          </Link>
        </div>

        {/* Auth buttons - Right side */}
        <div className="hidden md:flex items-center space-x-4 justify-self-end">
          <Link
            to="/login"
            className="text-slate-300 hover:text-white transition-colors text-sm whitespace-nowrap"
          >
            Log in
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-400 text-slate-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-300 transition-colors whitespace-nowrap"
            onClick={() => (window.location.href = "/register")}
          >
            Register
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white absolute right-6 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/personal"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Personal
              </Link>
              <Link
                to="/business"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Business
              </Link>
              <Link
                to="/platform"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Platform
              </Link>
              <Link
                to="/help"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Help
              </Link>
              <hr className="border-slate-700" />
              <Link
                to="/login"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="bg-lime-400 text-slate-900 px-4 py-2 rounded-full text-center font-medium hover:bg-lime-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

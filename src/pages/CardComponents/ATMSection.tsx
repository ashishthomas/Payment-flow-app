import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ATMSection() {
  const features = [
    "Free withdrawals up to $200/month",
    "Access to 55,000+ ATMs worldwide",
    "Real exchange rates",
    "No additional bank fees",
  ];

  const locations = [
    { country: "United States", atms: "15,000+" },
    { country: "United Kingdom", atms: "8,500+" },
    { country: "Canada", atms: "6,200+" },
    { country: "Australia", atms: "4,800+" },
    { country: "Germany", atms: "3,900+" },
    { country: "France", atms: "3,200+" },
  ];

  return (
    <motion.div
      id="atm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
    >
      <div>
        <h2 className="text-3xl font-semibold text-white mb-6">
          ATM withdrawals worldwide
        </h2>
        <p className="text-slate-400 mb-6 leading-relaxed">
          Access your money anywhere with free ATM withdrawals up to $200 per
          month. After that, just 2% fee - still better than most banks.
        </p>

        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-3">
              <MapPin className="text-lime-400 flex-shrink-0" size={20} />
              <span className="text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-xl font-semibold text-white mb-6">
          ATM Network Coverage
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div
              key={loc.country}
              className="text-center p-4 bg-slate-700/50 rounded-xl"
            >
              <div className="text-lime-400 font-bold text-lg">{loc.atms}</div>
              <div className="text-slate-300 text-sm">{loc.country}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

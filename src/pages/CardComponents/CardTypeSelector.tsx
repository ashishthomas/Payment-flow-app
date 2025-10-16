import { motion } from "framer-motion";
import { CreditCard, Plane, Building2, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import { cardFeatures } from "../../data/CardData";

type CardType = "personal" | "travel" | "business";

interface Props {
  selectedCardType: CardType;
  onSelect: (type: CardType) => void;
}

export default function CardTypeSelector({
  selectedCardType,
  onSelect,
}: Props) {
  const cardTypes = [
    { id: "personal", icon: CreditCard, label: "Personal" },
    { id: "travel", icon: Plane, label: "Travel" },
    { id: "business", icon: Building2, label: "Business" },
  ];

  const handleOrderCard = () =>
    toast.success(
      "Card order initiated! You'll receive it in 5–7 business days."
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-semibold text-white text-center mb-8">
        Choose your card type
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {cardTypes.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(id as CardType)}
            className={`flex items-center space-x-3 px-8 py-4 rounded-full transition-all ${
              selectedCardType === id
                ? "bg-lime-400 text-slate-900"
                : "bg-slate-800 text-white hover:bg-slate-700"
            }`}
          >
            <Icon size={24} />
            <span className="font-semibold">{label}</span>
          </motion.button>
        ))}
      </div>

      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold text-white mb-6 capitalize">
          {selectedCardType} card features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cardFeatures[selectedCardType].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="text-lime-400 flex-shrink-0" size={20} />
              <span className="text-slate-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOrderCard}
            className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
          >
            <CreditCard size={20} />
            <span>Order {selectedCardType} card</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

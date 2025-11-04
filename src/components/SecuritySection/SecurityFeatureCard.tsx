import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const SecurityFeatureCard = ({
  icon: Icon,
  title,
  description,
  index,
}: FeatureProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="text-center"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="inline-flex items-center justify-center w-20 h-20 bg-lime-400/10 border border-lime-400/30 rounded-2xl mb-6"
    >
      <Icon className="text-lime-400" size={32} />
    </motion.div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

export default SecurityFeatureCard;

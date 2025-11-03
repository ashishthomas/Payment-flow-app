import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { REGISTER_TEXT } from "../../../constants/Register-text-constants";

const RegisterLeftSection = () => {
  const benefits = REGISTER_TEXT.benefits;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
        {REGISTER_TEXT.heading.title}{" "}
        <span className="text-lime-400 font-medium">
          {REGISTER_TEXT.heading.highlight}
        </span>{" "}
        people
      </h1>
      <p className="text-xl text-slate-400 mb-8">
        {REGISTER_TEXT.heading.subtitle}
      </p>

      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <CheckCircle className="text-lime-400 flex-shrink-0" size={20} />
            <span className="text-slate-300">{benefit}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RegisterLeftSection;

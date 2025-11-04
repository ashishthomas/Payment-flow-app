import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SecurityGuarantee = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="flex items-center justify-center mt-12 space-x-4"
  >
    <CheckCircle2 className="text-lime-400" size={24} />
    <span className="text-slate-300 text-lg">
      Money protected up to £85,000 by the Financial Services Compensation
      Scheme
    </span>
  </motion.div>
);

export default SecurityGuarantee;

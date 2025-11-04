import { Shield, Lock, Eye } from "lucide-react";
import SecurityHeader from "./SecuritySection/SecurityHeader";
import SecurityFeatureCard from "./SecuritySection/SecurityFeatureCard";
import SecurityStats from "./SecuritySection/SecurityStats";
import SecurityGuarantee from "./SecuritySection/SecurityGuarantee";

const features = [
  {
    icon: Shield,
    title: "2-Factor Authentication",
    description:
      "Extra layer of security to protect your account and transactions.",
  },
  {
    icon: Lock,
    title: "FINTRAC Registered",
    description:
      "Fully regulated and compliant with Canadian financial regulations.",
  },
  {
    icon: Eye,
    title: "Fraud Protection",
    description:
      "Advanced monitoring systems to detect and prevent fraudulent activity.",
  },
];

const SecuritySection = () => (
  <section id="how-it-works" className="py-32 bg-slate-900">
    <div className="max-w-7xl mx-auto px-6">
      <SecurityHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((f, i) => (
          <SecurityFeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
      <SecurityStats />
      <SecurityGuarantee />
    </div>
  </section>
);

export default SecuritySection;

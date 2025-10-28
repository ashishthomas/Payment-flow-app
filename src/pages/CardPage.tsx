import { useState } from "react";
import CardHeader from "../pages/CardComponents/CardHeader";
import CardPreview from "../pages/CardComponents/CardPreview";
import CardTypeSelector from "../pages/CardComponents/CardTypeSelector";
import ATMSection from "../pages/CardComponents/ATMSection";
import FeesTable from "../pages/CardComponents/FeesTable";
import CTASection from "../pages/CardComponents/CTASection";

type CardType = "personal" | "travel" | "business";

export default function CardPage() {
  const [selectedCardType, setSelectedCardType] =
    useState<CardType>("personal");

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <CardHeader />
        <CardPreview />
        <CardTypeSelector
          selectedCardType={selectedCardType}
          onSelect={setSelectedCardType}
        />
        <ATMSection />
        <FeesTable />
        <CTASection />
      </div>
    </div>
  );
}

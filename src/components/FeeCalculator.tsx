import { useState, useMemo, useCallback } from "react";
import FeeHeader from "./FeeCalculator/FeeHeader";
import TransferForm from "./FeeCalculator/TransferForm";
import ComparisonCard from "./FeeCalculator/ComparisonCard";
import SavingsSummary from "./FeeCalculator/SavingsSummary";
import { feeConstants } from "../constants/feeConstants";

const FeeCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("USD");

  const { exchangeRate, flowPayFee, bankFee } = feeConstants;

  const { flowPayTotal, bankTotal, savings, rateDifference } = useMemo(() => {
    const flow = amount * exchangeRate - flowPayFee;
    const bank = amount * exchangeRate - bankFee;
    return {
      flowPayTotal: flow,
      bankTotal: bank,
      savings: bankFee - flowPayFee,
      rateDifference: (exchangeRate * 0.97).toFixed(4),
    };
  }, [amount, exchangeRate]);

  const recipientValue = useMemo(
    () => (amount * exchangeRate).toFixed(2),
    [amount, exchangeRate]
  );

  const handleAmount = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setAmount(Number(e.target.value)),
    []
  );

  const percentage = ((savings / amount) * 100).toFixed(1);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <FeeHeader />
        <TransferForm
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          exchangeRate={exchangeRate}
          recipientValue={recipientValue}
          onAmountChange={handleAmount}
          onFromChange={(e) => setFromCurrency(e.target.value)}
          onToChange={(e) => setToCurrency(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ComparisonCard
            title="FlowPay"
            fee={flowPayFee}
            rate={exchangeRate}
            total={flowPayTotal}
            highlight
          />
          <ComparisonCard
            title="Traditional Bank"
            fee={bankFee}
            rate={rateDifference}
            total={bankTotal}
          />
        </div>
        <SavingsSummary savings={savings} percentage={percentage} />
      </div>
    </section>
  );
};

export default FeeCalculator;

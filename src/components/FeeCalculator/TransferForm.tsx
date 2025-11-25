// TransferForm.tsx
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import CurrencyInputSection from "./component/CurrencyInputSection";

interface Props {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
  recipientValue: string;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFromChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onToChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  // NEW PROPS (no more hardcoded text)
  title?: string;
  sendLabel?: string;
  receiveLabel?: string;
  currencies?: string[];
}

const TransferForm = ({
  amount,
  fromCurrency,
  toCurrency,
  exchangeRate,
  recipientValue,
  onAmountChange,
  onFromChange,
  onToChange,
  title = "Transfer Calculator",
  sendLabel = "You send",
  receiveLabel = "Recipient gets",
  currencies = ["USD", "CAD", "EUR", "GBP"],
}: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-8"
  >
    <div className="flex items-center space-x-3 mb-6">
      <Calculator className="text-lime-400" size={24} />
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <CurrencyInputSection
        id="sendAmount"
        label={sendLabel}
        value={amount}
        onChange={onAmountChange}
        currencies={currencies}
        selectedCurrency={fromCurrency}
        onCurrencyChange={onFromChange}
      />

      <div className="flex items-center justify-center">
        <ArrowRight className="text-slate-400" size={32} />
      </div>

      <CurrencyInputSection
        id="recipientAmount"
        label={receiveLabel}
        value={recipientValue}
        readOnly
        currencies={currencies}
        selectedCurrency={toCurrency}
        onCurrencyChange={onToChange}
      />
    </div>

    <div className="text-center text-slate-400 mb-6">
      Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
    </div>
  </motion.div>
);

export default TransferForm;

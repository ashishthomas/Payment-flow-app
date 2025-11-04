import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";

interface Props {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
  recipientValue: string;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFromChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onToChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const currencies = ["USD", "CAD", "EUR", "GBP"];

const TransferForm = ({
  amount,
  fromCurrency,
  toCurrency,
  exchangeRate,
  recipientValue,
  onAmountChange,
  onFromChange,
  onToChange,
}: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-8"
  >
    <div className="flex items-center space-x-3 mb-6">
      <Calculator className="text-lime-400" size={24} />
      <h3 className="text-2xl font-semibold text-white">Transfer Calculator</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Amount */}
      <div>
        <label className="block text-slate-400 text-sm mb-2">You send</label>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={onAmountChange}
            className="w-full bg-slate-700 text-white text-2xl p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
          />
          <select
            value={fromCurrency}
            onChange={onFromChange}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            {currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ArrowRight className="text-slate-400" size={32} />
      </div>

      {/* Recipient */}
      <div>
        <label className="block text-slate-400 text-sm mb-2">
          Recipient gets
        </label>
        <div className="relative">
          <div className="w-full bg-slate-700 text-white text-2xl p-4 rounded-xl border border-slate-600">
            {recipientValue}
          </div>
          <select
            value={toCurrency}
            onChange={onToChange}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            {currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
        </div>
      </div>
    </div>

    <div className="text-center text-slate-400 mb-6">
      Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
    </div>
  </motion.div>
);

export default TransferForm;

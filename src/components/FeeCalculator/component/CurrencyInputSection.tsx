// components/CurrencyInputSection.tsx
import React from "react";

interface CurrencyInputSectionProps {
  id: string;
  label: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currencies: string[];
  selectedCurrency: string;
  onCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  readOnly?: boolean;
}

const CurrencyInputSection = ({
  id,
  label,
  value,
  onChange,
  currencies,
  selectedCurrency,
  onCurrencyChange,
  readOnly = false,
}: CurrencyInputSectionProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-slate-400 text-sm mb-2">
        {label}
      </label>

      <div className="relative">
        {readOnly ? (
          <div
            id={id}
            className="w-full bg-slate-700 text-white text-2xl p-4 rounded-xl border border-slate-600"
          >
            {value}
          </div>
        ) : (
          <input
            id={id}
            type="number"
            value={value}
            onChange={onChange}
            className="w-full bg-slate-700 text-white text-2xl p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
          />
        )}

        <select
          value={selectedCurrency}
          onChange={onCurrencyChange}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-lg text-sm"
        >
          {currencies.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInputSection;

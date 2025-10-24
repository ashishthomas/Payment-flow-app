import { Field, ErrorMessage } from "formik";
import type { LucideIcon } from "lucide-react";

interface AuthInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  Icon: LucideIcon;
  disabled?: boolean;
}

const AuthInput = ({
  label,
  name,
  type = "text",
  placeholder,
  Icon,
  disabled,
}: AuthInputProps) => {
  return (
    <div>
      <label className="block text-slate-400 text-sm mb-2">{label}</label>
      <div className="relative">
        <Icon
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={20}
        />
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-slate-700 text-white pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default AuthInput;

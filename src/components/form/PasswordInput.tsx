import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const PasswordInput = ({
  name,
  label,
  placeholder,
  disabled,
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-slate-400 text-sm mb-2">{label}</label>
      <div className="relative">
        <Lock
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={20}
        />
        <Field
          type={show ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-slate-700 text-white pl-12 pr-12 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          disabled={disabled}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white disabled:opacity-50"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default PasswordInput;

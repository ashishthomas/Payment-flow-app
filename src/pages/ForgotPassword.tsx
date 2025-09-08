import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords do not match")
      .required("Confirm your password"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    const { email, newPassword } = values;

    const userData = {
      email,
      newPassword,
    };

    localStorage.setItem("forgotPassword", JSON.stringify(userData));
    toast.success("Password updated successfully!");

    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h2 className="text-3xl text-white font-semibold mb-6 text-center">
          Reset Password
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-slate-400 text-sm mb-2"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <Field
                  name="email"
                  type="email"
                  className="w-full bg-slate-700 text-white pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="email"
                className="block text-slate-400 text-sm mb-2"
              >
                New Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <Field
                  name="newPassword"
                  type="password"
                  className="w-full bg-slate-700 text-white pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                  placeholder="New password"
                />
              </div>
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="email"
                className="block text-slate-400 text-sm mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <Field
                  name="confirmPassword"
                  type="password"
                  className="w-full bg-slate-700 text-white pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                  placeholder="Confirm new password"
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 text-slate-900 py-3 rounded-xl font-semibold hover:bg-lime-300 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Update Password</span>
              <ArrowRight size={20} />
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

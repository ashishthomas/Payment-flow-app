import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authUtils } from "../utils/auth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    "Multi-currency account with real exchange rates",
    "Send money to 80+ countries",
    "FlowPay debit card for worldwide spending",
    "No monthly fees or minimum balance",
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreedToTerms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
      agreedToTerms: Yup.boolean().oneOf([true], "You must agree to the terms"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const result = authUtils.register({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        });

        if (result.success && result.user) {
          const loginResult = authUtils.login({
            email: values.email,
            password: values.password,
          });

          if (loginResult.success) {
            toast.success(`Welcome to FlowPay, ${result.user.firstName}! 🎉`);
            setTimeout(() => {
              navigate("/");
            }, 1500);
          } else {
            toast.success("Registration successful! Please log in.");
            navigate("/login");
          }
        } else {
          toast.error(result.message);
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Join <span className="text-lime-400 font-medium">16+ million</span>{" "}
            people
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            Who trust FlowPay for fast, fair, and transparent international
            money transfers.
          </p>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle
                  className="text-lime-400 flex-shrink-0"
                  size={20}
                />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white mb-2">
              Create your account
            </h2>
            <p className="text-slate-400">Get started in just a few minutes</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* First and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User
                  className="absolute left-4 top-3.5 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="w-full bg-slate-700 text-white pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-400 text-xs mt-1">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>

              <div className="relative">
                <User
                  className="absolute left-4 top-3.5 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="w-full bg-slate-700 text-white pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-400 text-xs mt-1">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-3.5 text-slate-400"
                size={20}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full bg-slate-700 text-white pl-12 pr-4 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                className="absolute left-4 top-3.5 text-slate-400"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full bg-slate-700 text-white pl-12 pr-12 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-slate-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock
                className="absolute left-4 top-3.5 text-slate-400"
                size={20}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="w-full bg-slate-700 text-white pl-12 pr-12 py-3 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-3.5 text-slate-400"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formik.values.agreedToTerms}
                onChange={formik.handleChange}
                className="w-4 h-4 mt-1"
              />
              <label className="text-slate-400 text-sm">
                I agree to the{" "}
                <span className="text-lime-400">Terms of Service</span> and{" "}
                <span className="text-lime-400">Privacy Policy</span>
              </label>
            </div>
            {formik.touched.agreedToTerms && formik.errors.agreedToTerms && (
              <p className="text-red-400 text-xs mt-1">
                {formik.errors.agreedToTerms}
              </p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-lime-400 text-slate-900 py-3 rounded-xl font-semibold hover:bg-lime-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <span>Create account</span>
                  <ArrowRight size={20} />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400">
              Already have an account?{" "}
              <Link to="/login" className="text-lime-400 hover:text-lime-300">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;

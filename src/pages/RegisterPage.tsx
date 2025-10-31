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
import { REGISTER_TEXT } from "../constants/Register-text-constants"; // ✅ import constants

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = REGISTER_TEXT.benefits;

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
      firstName: Yup.string().required(REGISTER_TEXT.validation.firstName),
      lastName: Yup.string().required(REGISTER_TEXT.validation.lastName),
      email: Yup.string()
        .email(REGISTER_TEXT.validation.email.invalid)
        .required(REGISTER_TEXT.validation.email.required),
      password: Yup.string()
        .min(6, REGISTER_TEXT.validation.password.min)
        .required(REGISTER_TEXT.validation.password.required),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref("password")],
          REGISTER_TEXT.validation.confirmPassword.mismatch
        )
        .required(REGISTER_TEXT.validation.confirmPassword.required),
      agreedToTerms: Yup.boolean().oneOf(
        [true],
        REGISTER_TEXT.validation.agreedToTerms
      ),
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
            toast.success(REGISTER_TEXT.toast.welcome(result.user.firstName));
            setTimeout(() => {
              navigate("/");
            }, 1500);
          } else {
            toast.success(REGISTER_TEXT.toast.registrationSuccess);
            navigate("/login");
          }
        } else {
          toast.error(result.message);
        }
      } catch (err) {
        console.error(err);
        toast.error(REGISTER_TEXT.toast.error);
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
            {REGISTER_TEXT.heading.title}{" "}
            <span className="text-lime-400 font-medium">
              {REGISTER_TEXT.heading.highlight}
            </span>{" "}
            people
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            {REGISTER_TEXT.heading.subtitle}
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
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
              {REGISTER_TEXT.form.title}
            </h2>
            <p className="text-slate-400">{REGISTER_TEXT.form.subtitle}</p>
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
                  placeholder={REGISTER_TEXT.form.placeholders.firstName}
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
                  placeholder={REGISTER_TEXT.form.placeholders.lastName}
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
                placeholder={REGISTER_TEXT.form.placeholders.email}
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
                placeholder={REGISTER_TEXT.form.placeholders.password}
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
                placeholder={REGISTER_TEXT.form.placeholders.confirmPassword}
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
                className="appearance-none w-4 h-4 mt-1 border-2 border-slate-500 rounded-md bg-slate-700 checked:bg-lime-400 checked:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-1 cursor-pointer"
              />
              <label className="text-slate-400 text-sm">
                {REGISTER_TEXT.form.checkbox.label}{" "}
                <Link
                  to="/terms"
                  className="text-lime-400 hover:text-blue-300 transition-colors"
                >
                  {REGISTER_TEXT.form.checkbox.terms}
                </Link>{" "}
                {REGISTER_TEXT.form.checkbox.and}{" "}
                <Link
                  to="/privacy"
                  className="text-lime-400 hover:text-blue-300 transition-colors"
                >
                  {REGISTER_TEXT.form.checkbox.privacy}
                </Link>
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
                  <span>{REGISTER_TEXT.form.button.loading}</span>
                </>
              ) : (
                <>
                  <span>{REGISTER_TEXT.form.button.create}</span>
                  <ArrowRight size={20} />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400">
              {REGISTER_TEXT.form.footer.existing}{" "}
              <Link to="/login" className="text-lime-400 hover:text-lime-300">
                {REGISTER_TEXT.form.footer.signIn}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;

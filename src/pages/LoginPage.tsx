import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Mail, ArrowRight } from "lucide-react";
import { authUtils } from "../utils/auth";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/form/AuthInput";
import PasswordInput from "../components/form/PasswordInput";

const LoginPage = () => {
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const result = authUtils.login(values);
      if (result.success && result.user) {
        toast.success(result.message);
        setTimeout(() => navigate("/"), 1500);
      } else toast.error(result.message);
    } catch {
      toast.error("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your FlowPay account"
      footer={
        <>
          By signing in, you agree to our{" "}
          <button className="text-slate-400 hover:text-white">
            Terms of Service
          </button>{" "}
          and{" "}
          <button className="text-slate-400 hover:text-white">
            Privacy Policy
          </button>
        </>
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <AuthInput
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter your email"
              Icon={Mail}
              disabled={isSubmitting}
            />

            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              disabled={isSubmitting}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 border-2 border-slate-500 rounded-md bg-slate-700 checked:bg-lime-400"
                  disabled={isSubmitting}
                />
                <span className="text-slate-300 text-sm">Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-lime-400 text-sm hover:text-lime-300"
                disabled={isSubmitting}
              >
                Forgot password?
              </button>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-lime-400 text-slate-900 py-3 rounded-xl font-semibold hover:bg-lime-300 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight size={20} />
                </>
              )}
            </motion.button>

            <div className="mt-8 text-center">
              <p className="text-slate-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-lime-400 hover:text-lime-300"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default LoginPage;

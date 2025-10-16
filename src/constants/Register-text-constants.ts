// src/constants/text-constants.ts

export const REGISTER_TEXT = {
  heading: {
    title: "Join",
    highlight: "16+ million",
    subtitle:
      "Who trust FlowPay for fast, fair, and transparent international money transfers.",
  },

  benefits: [
    "Multi-currency account with real exchange rates",
    "Send money to 80+ countries",
    "FlowPay debit card for worldwide spending",
    "No monthly fees or minimum balance",
  ],

  form: {
    title: "Create your account",
    subtitle: "Get started in just a few minutes",

    placeholders: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
    },

    checkbox: {
      label: "I agree to the",
      terms: "Terms of Service",
      and: "and",
      privacy: "Privacy Policy",
    },

    button: {
      create: "Create account",
      loading: "Creating account...",
    },

    footer: {
      existing: "Already have an account?",
      signIn: "Sign in",
    },
  },

  validation: {
    firstName: "First name is required",
    lastName: "Last name is required",
    email: {
      required: "Email is required",
      invalid: "Invalid email address",
    },
    password: {
      required: "Password is required",
      min: "Password must be at least 6 characters",
    },
    confirmPassword: {
      required: "Confirm your password",
      mismatch: "Passwords must match",
    },
    agreedToTerms: "You must agree to the terms",
  },

  toast: {
    welcome: (name: string) => `Welcome to FlowPay, ${name}! 🎉`,
    registrationSuccess: "Registration successful! Please log in.",
    error: "Something went wrong. Please try again.",
  },
};

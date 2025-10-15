// text-constants.ts

export const DOCS_TEXT = {
  title: "FlowPay Docs",

  sections: {
    quickStart: {
      id: "quick-start",
      title: "Quick Start",
      description:
        "Get started with FlowPay in 3 steps: create an account, get your API key, and make your first request.",
      code: `curl -X POST "https://api.flowpay.com/v1/payments" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "amount": 1000,
  "currency": "USD",
  "source": "tok_visa"
}'`,
    },
    authentication: {
      id: "authentication",
      title: "Authentication",
      description: "Use your API key in the Authorization header:",
      code: `Authorization: Bearer YOUR_API_KEY`,
    },
    paymentsAPI: {
      id: "payments-api",
      title: "Payments API",
      create: "Create a payment:",
      retrieve: "Retrieve a payment:",
      createCode: `POST /v1/payments
{
  "amount": 5000,
  "currency": "USD",
  "source": "tok_mastercard"
}`,
      retrieveCode: `GET /v1/payments/{payment_id}`,
    },
    webhooks: {
      id: "webhooks",
      title: "Webhooks",
      description:
        "FlowPay sends events to your webhook URL. Example: payment successful.",
      code: `{
  "event": "payment.success",
  "data": {
    "id": "pay_12345",
    "amount": 1000
  }
}`,
    },
    sdks: {
      id: "sdks",
      title: "SDKs & Client Libraries",
      install: "Install via npm:",
      installCode: `npm install flowpay-sdk`,
      example: "Example usage:",
      exampleCode: `import FlowPay from 'flowpay-sdk';
const client = new FlowPay('YOUR_API_KEY');
await client.createPayment({ amount: 2000, currency: 'USD' });`,
    },
    testing: {
      id: "testing",
      title: "Testing & Sandbox",
      description: "Use sandbox keys for testing:",
      sandboxCode: `sk_test_51M...`,
      example: "Example usage:",
      exampleCode: `import FlowPay from 'flowpay-sdk';
const client = new FlowPay('sk_test_51M...');
await client.createPayment({ amount: 2000, currency: 'USD' });`,
    },
    errors: {
      id: "errors",
      title: "Error Handling",
      description: "Example error response:",
      code: `{
  "error": {
    "code": "invalid_request",
    "message": "Missing required parameter"
  }
}`,
    },
    compliance: {
      id: "compliance",
      title: "Compliance & Security",
      paragraphs: [
        "FlowPay is PCI DSS Level 1 compliant and all communication is protected with TLS 1.2+ encryption.",
        "Sensitive data such as cardholder information is tokenized and never stored in plain text. We follow industry best practices for key management and encryption at rest.",
        "Our systems are regularly penetration tested and vulnerability scanned to ensure ongoing security.",
        "Access to customer data is restricted via role-based access controls (RBAC), MFA, and continuous monitoring.",
        "FlowPay also complies with GDPR and CCPA standards, ensuring customer data privacy and transparency.",
      ],
    },
    uiComponents: {
      id: "ui-components",
      title: "UI Components",
      description: "Embed FlowPay’s payment form:",
      code: `<iframe src="https://checkout.flowpay.com" width="400" height="600"></iframe>`,
    },
    faqs: {
      id: "faqs",
      title: "FAQs",
      questions: [
        {
          q: "How do I refund a payment?",
          a: "Use the Refund API:",
          code: `POST /v1/refunds`,
        },
        {
          q: "What currencies are supported?",
          a: "FlowPay supports over 100 currencies.",
          code: `GET /v1/currencies`,
        },
        {
          q: "What payment methods are available?",
          a: "FlowPay supports over 20 payment methods.",
          code: `GET /v1/payment-methods`,
        },
        {
          q: "How do I handle disputes?",
          a: "Use the Disputes API:",
          code: `POST /v1/disputes`,
        },
      ],
    },
  },
};

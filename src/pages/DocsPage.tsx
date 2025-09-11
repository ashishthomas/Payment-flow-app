import * as React from "react";
import { useState } from "react";
import { Copy } from "lucide-react";

type Section = {
  id: string;
  title: string;
  content: React.JSX.Element;
};

const CodeBlock = ({ code }: { code: string }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <div className="relative">
      <pre className="bg-slate-800 p-4 rounded-md text-sm overflow-x-auto text-lime-300">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 p-1 bg-slate-700 rounded hover:bg-slate-600"
      >
        <Copy size={16} />
      </button>
    </div>
  );
};

export default function DocsPage() {
  const sections: Section[] = [
    {
      id: "quick-start",
      title: "Quick Start",
      content: (
        <>
          <p className="mb-4">
            Get started with FlowPay in 3 steps: create an account, get your API
            key, and make your first request.
          </p>
          <CodeBlock
            code={`curl -X POST "https://api.flowpay.com/v1/payments" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "amount": 1000,
  "currency": "USD",
  "source": "tok_visa"
}'`}
          />
        </>
      ),
    },
    {
      id: "authentication",
      title: "Authentication",
      content: (
        <>
          <p>Use your API key in the Authorization header:</p>
          <CodeBlock code={`Authorization: Bearer YOUR_API_KEY`} />
        </>
      ),
    },
    {
      id: "payments-api",
      title: "Payments API",
      content: (
        <>
          <p>Create a payment:</p>
          <CodeBlock
            code={`POST /v1/payments
{
  "amount": 5000,
  "currency": "USD",
  "source": "tok_mastercard"
}`}
          />
          <p className="mt-4">Retrieve a payment:</p>
          <CodeBlock code={`GET /v1/payments/{payment_id}`} />
        </>
      ),
    },
    {
      id: "webhooks",
      title: "Webhooks",
      content: (
        <>
          <p>
            FlowPay sends events to your webhook URL. Example: payment
            successful.
          </p>
          <CodeBlock
            code={`{
  "event": "payment.success",
  "data": {
    "id": "pay_12345",
    "amount": 1000
  }
}`}
          />
        </>
      ),
    },
    {
      id: "sdks",
      title: "SDKs & Client Libraries",
      content: (
        <>
          <p>Install via npm:</p>
          <CodeBlock code={`npm install flowpay-sdk`} />
          <p className="mt-4">Example usage:</p>
          <CodeBlock
            code={`import FlowPay from 'flowpay-sdk';
const client = new FlowPay('YOUR_API_KEY');
await client.createPayment({ amount: 2000, currency: 'USD' });`}
          />
        </>
      ),
    },
    {
      id: "testing",
      title: "Testing & Sandbox",
      content: (
        <>
          <p>Use sandbox keys for testing:</p>
          <CodeBlock code={`sk_test_51M...`} />
          <p className="mt-4">Example usage:</p>
          <CodeBlock
            code={`import FlowPay from 'flowpay-sdk';
const client = new FlowPay('sk_test_51M...');
await client.createPayment({ amount: 2000, currency: 'USD' });`}
          />
        </>
      ),
    },
    {
      id: "errors",
      title: "Error Handling",
      content: (
        <>
          <p>Example error response:</p>
          <CodeBlock
            code={`{
  "error": {
    "code": "invalid_request",
    "message": "Missing required parameter"
  }
}`}
          />
        </>
      ),
    },
    {
      id: "compliance",
      title: "Compliance & Security",
      content: (
        <>
          <p>
            FlowPay is <strong>PCI DSS Level 1 compliant</strong> and all
            communication is protected with <strong>TLS 1.2+ encryption</strong>
            .
          </p>
          <p>
            Sensitive data such as cardholder information is{" "}
            <strong>tokenized</strong> and never stored in plain text. We follow{" "}
            <strong>industry best practices</strong> for key management and
            encryption at rest.
          </p>
          <p>
            Our systems are regularly <strong>penetration tested</strong> and{" "}
            <strong> vulnerability scanned</strong> to ensure ongoing security.
          </p>
          <p>
            Access to customer data is restricted via{" "}
            <strong>role-based access controls (RBAC)</strong>,{" "}
            <strong>MFA</strong>, and continuous monitoring.
          </p>
          <p>
            FlowPay also complies with <strong>GDPR</strong> and{" "}
            <strong>CCPA</strong> standards, ensuring customer data privacy and
            transparency.
          </p>
        </>
      ),
    },
    {
      id: "ui-components",
      title: "UI Components",
      content: (
        <>
          <p>Embed FlowPay’s payment form:</p>
          <CodeBlock
            code={`<iframe src="https://checkout.flowpay.com" width="400" height="600"></iframe>`}
          />
        </>
      ),
    },
    {
      id: "faqs",
      title: "FAQs",
      content: (
        <>
          <p>
            <strong>Q:</strong> How do I refund a payment?
            <br />
            <strong>A:</strong> Use the Refund API:
          </p>
          <CodeBlock code={`POST /v1/refunds`} />
          <p className="mt-4">
            <strong>Q:</strong> What currencies are supported?
            <br />
            <strong>A:</strong> FlowPay supports over 100 currencies.
          </p>
          <CodeBlock code={`GET /v1/currencies`} />
          <p className="mt-4">
            <strong>Q:</strong> What payment methods are available?
            <br />
            <strong>A:</strong> FlowPay supports over 20 payment methods.
          </p>
          <CodeBlock code={`GET /v1/payment-methods`} />
          <p className="mt-4">
            <strong>Q:</strong> How do I handle disputes?
            <br />
            <strong>A:</strong> Use the Disputes API:
          </p>
          <CodeBlock code={`POST /v1/disputes`} />
        </>
      ),
    },
  ];

  const [active, setActive] = useState(sections[0].id);

  return (
    <div className="bg-slate-900 text-white min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 p-4 border-r border-slate-700 ">
        <h2 className="text-lg font-bold mb-4 mt-20">FlowPay Docs</h2>
        <nav>
          {sections.map((s) => (
            <button
              key={s.id}
              className={`block text-left w-full p-2 rounded-md mb-1 ${
                active === s.id ? "bg-slate-700" : "hover:bg-slate-700"
              }`}
              onClick={() => setActive(s.id)}
            >
              {s.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4 mt-18">
          {sections.find((s) => s.id === active)?.title}
        </h1>
        <div>{sections.find((s) => s.id === active)?.content}</div>
      </main>
    </div>
  );
}

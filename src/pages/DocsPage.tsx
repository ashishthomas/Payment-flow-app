import { useState } from "react";
import { Copy } from "lucide-react";
import { DOCS_TEXT } from "../constants/DocsPage-text-constants";

const CodeBlock = ({ code }: { code: string }) => {
  const copyCode = () => navigator.clipboard.writeText(code);
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
  const { sections, title } = DOCS_TEXT;

  const sectionList = [
    {
      id: sections.quickStart.id,
      title: sections.quickStart.title,
      content: (
        <>
          <p className="mb-4">{sections.quickStart.description}</p>
          <CodeBlock code={sections.quickStart.code} />
        </>
      ),
    },
    {
      id: sections.authentication.id,
      title: sections.authentication.title,
      content: (
        <>
          <p>{sections.authentication.description}</p>
          <CodeBlock code={sections.authentication.code} />
        </>
      ),
    },
    {
      id: sections.paymentsAPI.id,
      title: sections.paymentsAPI.title,
      content: (
        <>
          <p>{sections.paymentsAPI.create}</p>
          <CodeBlock code={sections.paymentsAPI.createCode} />
          <p className="mt-4">{sections.paymentsAPI.retrieve}</p>
          <CodeBlock code={sections.paymentsAPI.retrieveCode} />
        </>
      ),
    },
    {
      id: sections.webhooks.id,
      title: sections.webhooks.title,
      content: (
        <>
          <p>{sections.webhooks.description}</p>
          <CodeBlock code={sections.webhooks.code} />
        </>
      ),
    },
    {
      id: sections.sdks.id,
      title: sections.sdks.title,
      content: (
        <>
          <p>{sections.sdks.install}</p>
          <CodeBlock code={sections.sdks.installCode} />
          <p className="mt-4">{sections.sdks.example}</p>
          <CodeBlock code={sections.sdks.exampleCode} />
        </>
      ),
    },
    {
      id: sections.testing.id,
      title: sections.testing.title,
      content: (
        <>
          <p>{sections.testing.description}</p>
          <CodeBlock code={sections.testing.sandboxCode} />
          <p className="mt-4">{sections.testing.example}</p>
          <CodeBlock code={sections.testing.exampleCode} />
        </>
      ),
    },
    {
      id: sections.errors.id,
      title: sections.errors.title,
      content: (
        <>
          <p>{sections.errors.description}</p>
          <CodeBlock code={sections.errors.code} />
        </>
      ),
    },
    {
      id: sections.compliance.id,
      title: sections.compliance.title,
      content: (
        <>
          {sections.compliance.paragraphs.map((text, i) => (
            <p key={i} className="mb-3">
              {text}
            </p>
          ))}
        </>
      ),
    },
    {
      id: sections.uiComponents.id,
      title: sections.uiComponents.title,
      content: (
        <>
          <p>{sections.uiComponents.description}</p>
          <CodeBlock code={sections.uiComponents.code} />
        </>
      ),
    },
    {
      id: sections.faqs.id,
      title: sections.faqs.title,
      content: (
        <>
          {sections.faqs.questions.map((faq, i) => (
            <div key={i} className="mt-4">
              <p>
                <strong>Q:</strong> {faq.q}
                <br />
                <strong>A:</strong> {faq.a}
              </p>
              <CodeBlock code={faq.code} />
            </div>
          ))}
        </>
      ),
    },
  ];

  const [active, setActive] = useState(sectionList[0].id);

  return (
    <div className="bg-slate-900 text-white min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 p-4 border-r border-slate-700">
        <h2 className="text-lg font-bold mb-4 mt-20">{title}</h2>
        <nav>
          {sectionList.map((s) => (
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
          {sectionList.find((s) => s.id === active)?.title}
        </h1>
        <div>{sectionList.find((s) => s.id === active)?.content}</div>
      </main>
    </div>
  );
}

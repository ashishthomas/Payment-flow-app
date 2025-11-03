import RegisterLeftSection from "./RegisterLeftSection";
import RegisterForm from "./RegisterForm";

const RegisterLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <RegisterLeftSection />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterLayout;

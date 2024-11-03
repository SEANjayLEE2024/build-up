import { useState } from "react";
import TermsAgreement from "../components/signup/TermsAgreement";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);

  const handleLoginStep = () => {};

  return (
    <div className="pt-10 h-screen flex flex-col justify-between">
      {step === 1 && <TermsAgreement />}
    </div>
  );
};

export default SignupPage;

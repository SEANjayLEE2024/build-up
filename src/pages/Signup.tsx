import { useState } from "react";
import TermsAgreement from "../components/signup/TermsAgreement";
import SetProfile from "../components/signup/SetProfile";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = (step: number) => {
    setStep(step + 1);
  };

  return (
    <div className="pt-10 h-screen flex flex-col justify-between">
      {step === 1 && <TermsAgreement handleLoginStep={nextStep} />}
      {step === 2 && <SetProfile />}
    </div>
  );
};

export default SignupPage;

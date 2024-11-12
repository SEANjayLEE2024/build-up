import { useState } from "react";
import TermsAgreement from "../components/signup/terms/TermsAgreement";
import SetProfile from "../components/signup/profile/SetProfile";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = (step: number) => {
    setStep(step + 1);
  };

  return (
    <div className="pt-10 h-screen">
      {step === 1 && <TermsAgreement handleLoginStep={nextStep} />}
      {step === 2 && <SetProfile handleLoginStep={nextStep} />}
    </div>
  );
};

export default SignupPage;

import { useState } from "react";
import TermsAgreement from "../components/signup/terms/TermsAgreement";
import SetUser from "../components/signup/profile/SetUser";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = (step: number) => {
    setStep(step + 1);
  };

  return (
    <div className="pt-10 pb-16">
      {step === 1 && <TermsAgreement handleLoginStep={nextStep} />}
      {step === 2 && <SetUser handleLoginStep={nextStep} />}
    </div>
  );
};

export default SignupPage;

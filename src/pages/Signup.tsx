import { useState } from "react";
import TermsAgreement from "../components/signup/terms/TermsAgreement";
import SetUser from "../components/signup/user/SetUser";
import SetProfile from "../components/signup/profile/SetProfile";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = (step: number) => {
    setStep(step + 1);
  };

  return (
    <div className="pt-10 pb-16">
      {step === 1 && <TermsAgreement handleLoginStep={nextStep} />}
      {step === 2 && <SetUser handleLoginStep={nextStep} />}
      {step === 3 && <SetProfile />}
    </div>
  );
};

export default SignupPage;

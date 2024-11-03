import { useState } from "react";
import TermsAgreement from "../components/login/TermsAgreement";

const LoginPage = () => {
  const [steps, setSteps] = useState<number>(1);

  return <div className="pt-10">{steps === 1 && <TermsAgreement />}</div>;
};

export default LoginPage;

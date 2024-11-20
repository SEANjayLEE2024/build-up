import { useState } from "react";
import TermsAgreement from "../components/signup/terms/TermsAgreement";
import SetUser from "../components/signup/user/SetUser";
import SetProfile from "../components/signup/profile/SetProfile";
import { UserProfile, PlayerProfile } from "../models/signup.model";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);
  const [userInfo, setUserInfo] = useState<UserProfile>({
    nickname: "",
    gender: null,
    nation: {
      name: "",
      flag: "",
    },
    location: "",
    age: "",
  });
  const [profile, setProfile] = useState<PlayerProfile>({
    footballPosition: [],
    soccerPosition: [],
    career: null,
    strongFoot: null,
    favoriteClub: null,
  });

  const nextStep = (step: number) => {
    setStep(step + 1);
  };

  return (
    <div className="pt-10 pb-16">
      {step === 1 && <TermsAgreement handleLoginStep={nextStep} />}
      {step === 2 && (
        <SetUser
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          handleLoginStep={nextStep}
        />
      )}
      {step === 3 && (
        <SetProfile
          userInfo={userInfo}
          profile={profile}
          setProfile={setProfile}
        />
      )}
    </div>
  );
};

export default SignupPage;

import { useState } from "react";
import { UserProfile } from "../../../models/signup.model";
import Title from "../../common/Title";
import Nickname from "./Nickname";
import Gender from "./Gender";

const SetProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    nickname: "",
    gender: null,
    nation: "",
    location: "",
    age: "",
  });

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <Title>빌드업 정보 입력하기</Title>

        <Nickname profile={profile} setProfile={setProfile} />
        <Gender profile={profile} setProfile={setProfile} />

        <section className="mb-4">
          <p className="text-sm font-medium mb-2 py-0.5">
            국가 <span className="text-red-600">*</span>
          </p>
          <div className="`base-light border p-3 border-action-normal rounded-xl flex justify-between items-center text-sm overflow-hidden"></div>
        </section>
      </form>
    </>
  );
};

export default SetProfile;

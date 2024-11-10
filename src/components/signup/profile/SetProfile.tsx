import { useState } from "react";
import { UserProfile } from "../../../models/signup.model";
import Title from "../../common/Title";
import Nickname from "./Nickname";
import Gender from "./Gender";
import Nation from "./Nation";

const SetProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    nickname: "",
    gender: null,
    nation: "korea",
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
        <Nation profile={profile} setProfile={setProfile} />
      </form>
    </>
  );
};

export default SetProfile;

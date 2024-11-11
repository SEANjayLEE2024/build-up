import { useState, useEffect } from "react";
import { UserProfile } from "../../../models/signup.model";
import { httpClient } from "../../../api/http";
import { NationInfo } from "../../../models/signup.model";
import Title from "../../common/Title";
import Nickname from "./Nickname";
import Gender from "./Gender";
import Nation from "./Nation";
import FixedButtonLayout from "../../common/FixedButtonLayout";
import Button from "../../common/Button";
import Location from "./Location";
import Ages from "./Ages";

interface PropsType {
  handleLoginStep: (step: number) => void;
}
interface ApiNation {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
}

const SetProfile: React.FC<PropsType> = ({ handleLoginStep }) => {
  const [profile, setProfile] = useState<UserProfile>({
    nickname: "",
    gender: null,
    nation: {
      name: "South Korea",
      flag: "",
    },
    location: "",
    age: "",
  });
  const [nationList, setNationList] = useState<NationInfo[]>([]);

  const getNations = async () => {
    try {
      /* 무료 국가명, 국기img api */
      const response = await httpClient("https://restcountries.com/v3.1/all");
      const data: ApiNation[] = response.data;
      console.log(data);

      const nationsData = data.map((nation) => ({
        name: nation.name.common,
        flag: nation.flags.svg,
      }));

      const sortedData = nationsData.sort((a, b) => {
        if (a.name === "South Korea") return -1;
        if (b.name === "South Korea") return 1;
        return a.name.localeCompare(b.name);
      });

      setNationList(sortedData);
      if (sortedData.length > 0) {
        setProfile((prev) => ({
          ...prev,
          nation: {
            name: sortedData[0].name,
            flag: sortedData[0].flag,
          },
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNations();
  }, []);

  return (
    <div>
      <Title>빌드업 정보 입력하기</Title>

      <Nickname profile={profile} setProfile={setProfile} />
      <Gender profile={profile} setProfile={setProfile} />
      <Nation
        profile={profile}
        setProfile={setProfile}
        nationList={nationList}
      />
      <Location profile={profile} setProfile={setProfile} />
      <Ages />

      <FixedButtonLayout>
        <Button buttonEvent={() => handleLoginStep(2)}>다음</Button>
      </FixedButtonLayout>
    </div>
  );
};

export default SetProfile;

import { useState, useEffect } from "react";
import {
  UserProfile,
  NationInfo,
  NationAPI,
} from "../../../models/signup.model";
import { httpClient } from "../../../api/http";
import Title from "../../common/Title";
import Nickname from "./Nickname";
import Gender from "./Gender";
import Nation from "./Nation";
import FixedButtonLayout from "../../common/FixedButtonLayout";
import Button from "../../common/Button";
import Location from "./Location";
import Ages from "./Ages";

interface PropsType {
  userInfo: UserProfile;
  setUserInfo: React.Dispatch<React.SetStateAction<UserProfile>>;
  handleLoginStep: (step: number) => void;
}

const SetUser: React.FC<PropsType> = ({
  userInfo,
  setUserInfo,
  handleLoginStep,
}) => {
  const [nationList, setNationList] = useState<NationInfo[]>([]);

  const getNations = async () => {
    try {
      const response = await httpClient("https://restcountries.com/v3.1/all");
      const data: NationAPI[] = response.data;
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
        setUserInfo((prev) => ({
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
    <>
      <Title>빌드업 정보 입력하기</Title>

      <Nickname userInfo={userInfo} setUserInfo={setUserInfo} />
      <Gender userInfo={userInfo} setUserInfo={setUserInfo} />
      <Nation
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        nationList={nationList}
      />
      <Location userInfo={userInfo} setUserInfo={setUserInfo} />
      <Ages userInfo={userInfo} setUserInfo={setUserInfo} />

      <FixedButtonLayout>
        <Button
          className="text-white"
          disable={
            !userInfo.nickname ||
            userInfo.gender === null ||
            !userInfo.nation.name ||
            !userInfo.age
          }
          buttonEvent={() => handleLoginStep(2)}
        >
          다음
        </Button>
      </FixedButtonLayout>
    </>
  );
};

export default SetUser;

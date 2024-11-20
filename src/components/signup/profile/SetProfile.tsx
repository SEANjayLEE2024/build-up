import Title from "../../common/Title";
import targetImg from "../../../assets/images/target.png";
import SetFootBallPosition from "./SetFootBallPosition";
import { UserProfile, PlayerProfile } from "../../../models/signup.model";
import SetSoccerPosition from "./SetSoccerPosition";
import SetCareer from "./SetCareer";
import SetStrongFoot from "./SetStrongFoot";
import SetFavoriteClub from "./SetFavoriteClub";
import FixedButtonLayout from "../../common/FixedButtonLayout";
import Button from "../../common/Button";

interface PropsType {
  userInfo: UserProfile;
  profile: PlayerProfile;
  setProfile: React.Dispatch<React.SetStateAction<PlayerProfile>>;
}

const SetProfile: React.FC<PropsType> = ({ userInfo, profile, setProfile }) => {
  const createProfile = () => {
    console.log("완성");
    console.log(profile, userInfo);
  };

  return (
    <>
      <Title>
        <div className="flex justify-between items-center">
          <div>
            <p>선수 프로필 만들기</p>
            <span className="text-sm text-base-secondary font-normal">
              나만의 축구 프로필을 만들어봐요!
            </span>
          </div>
          <div>
            <img src={targetImg} alt="target" />
          </div>
        </div>
      </Title>

      <SetFootBallPosition profile={profile} setProfile={setProfile} />
      <SetSoccerPosition profile={profile} setProfile={setProfile} />
      <SetCareer profile={profile} setProfile={setProfile} />
      <SetStrongFoot profile={profile} setProfile={setProfile} />
      <SetFavoriteClub />

      <FixedButtonLayout>
        <Button
          className="text-white"
          disable={
            profile.footballPosition.length === 0 ||
            profile.soccerPosition.length === 0 ||
            profile.career === null ||
            profile.strongFoot === null
          }
          buttonEvent={createProfile}
        >
          프로필 완성하기
        </Button>
      </FixedButtonLayout>
    </>
  );
};

export default SetProfile;

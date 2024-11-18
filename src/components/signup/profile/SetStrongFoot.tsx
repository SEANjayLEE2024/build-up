import InputLayout from "../../common/InputLayout";
import { PlayerProfile, StrongFoot } from "../../../models/signup.model";

const FOOTS: StrongFoot[] = ["왼발", "양발", "오른발"];

interface PropsType {
  profile: PlayerProfile;
  setProfile: React.Dispatch<React.SetStateAction<PlayerProfile>>;
}

const SetStrongFoot: React.FC<PropsType> = ({ profile, setProfile }) => {
  const setStrongFoot = (foot: StrongFoot) => {
    setProfile((prev) => ({
      ...prev,
      strongFoot: foot,
    }));
  };

  return (
    <InputLayout title="주발">
      <div className="grid grid-cols-3">
        {FOOTS.map((foot) => (
          <button
            key={foot}
            className={`first-of-type:rounded-tl-xl first-of-type:rounded-bl-xl last-of-type:rounded-tr-xl last-of-type:rounded-br-xl shadow-sm border py-2.5 px-3 font-medium text-sm ${
              profile.strongFoot === foot
                ? "text-base-primary bg-base-secondary-hover"
                : "text-base-secondary  bg-white"
            }`}
            onClick={() => setStrongFoot(foot)}
          >
            {foot}
          </button>
        ))}
      </div>
    </InputLayout>
  );
};

export default SetStrongFoot;

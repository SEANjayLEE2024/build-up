import InputLayout from "../../common/InputLayout";
import { PlayerProfile } from "../../../models/signup.model";

const OPTIONAL_ITEMS = [
  "ST(스트라이커)",
  "LW(레프트윙)",
  "RW(라이트윙)",
  "AM(공격형 미드필더)",
  "DM(수비형 미드필더)",
  "LB(레프트백)",
  "RB(라이트백)",
  "CB(센터백)",
  "GK(골키퍼)",
];
const SELECT_MAXIMUM = 5;

interface PropsType {
  profile: PlayerProfile;
  setProfile: React.Dispatch<React.SetStateAction<PlayerProfile>>;
}

const SetSoccerPosition: React.FC<PropsType> = ({ profile, setProfile }) => {
  const selectItems = (item: string) => {
    const position = item.split("(")[0];

    setProfile((prev) => {
      if (
        prev.soccerPosition.length >= SELECT_MAXIMUM &&
        !prev.soccerPosition.includes(position)
      ) {
        return prev;
      }

      const updateSoccerPosition = prev.soccerPosition.includes(position)
        ? prev.soccerPosition.filter((list) => list !== position)
        : [...prev.soccerPosition, position];

      return {
        ...prev,
        soccerPosition: updateSoccerPosition,
      };
    });
  };

  return (
    <InputLayout
      title="주요 축구 포지션은 뭔가요?"
      unit={`최대 ${SELECT_MAXIMUM}개`}
    >
      <div className="flex flex-wrap gap-2">
        {OPTIONAL_ITEMS.map((item) => (
          <button
            className={`rounded-xl shadow-sm border py-2.5 px-3 font-medium text-sm ${
              profile.soccerPosition.includes(item.split("(")[0])
                ? "text-base-primary bg-base-secondary-hover"
                : "text-base-secondary  bg-white"
            }`}
            key={item}
            onClick={() => selectItems(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </InputLayout>
  );
};

export default SetSoccerPosition;

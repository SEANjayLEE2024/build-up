import InputLayout from "../../common/InputLayout";
import { PlayerProfile } from "../../../models/signup.model";

const OPTIONAL_ITEMS = [
  "PIVO (공격)",
  "ALA (미드필더)",
  "FIXO (미드필더)",
  "GOLEIRO (골키퍼)",
];
const SELECT_MAXIMUM = 2;

interface PropsType {
  profile: PlayerProfile;
  setProfile: React.Dispatch<React.SetStateAction<PlayerProfile>>;
}

const SetFootBallPosition: React.FC<PropsType> = ({ profile, setProfile }) => {
  const selectItems = (item: string) => {
    const position = item.split("(")[0];

    setProfile((prev) => {
      if (
        prev.footballPosition.length >= SELECT_MAXIMUM &&
        !prev.footballPosition.includes(position)
      ) {
        return prev;
      }

      const updateFootballPosition = prev.footballPosition.includes(position)
        ? prev.footballPosition.filter((list) => list !== position)
        : [...prev.footballPosition, position];

      return {
        ...prev,
        footballPosition: updateFootballPosition,
      };
    });
  };

  return (
    <InputLayout
      title="주요 풋살 포지션은 뭔가요?"
      unit={`최대 ${SELECT_MAXIMUM}개`}
    >
      <div className="flex flex-wrap gap-2">
        {OPTIONAL_ITEMS.map((item) => (
          <button
            className={`rounded-xl shadow-sm border py-2.5 px-3 font-medium text-sm ${
              profile.footballPosition.includes(item.split("(")[0])
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

export default SetFootBallPosition;

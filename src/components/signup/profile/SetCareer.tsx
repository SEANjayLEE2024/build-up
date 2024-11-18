import InputLayout from "../../common/InputLayout";
import { PlayerProfile } from "../../../models/signup.model";

const OPTIONAL_ITEMS = [
  "선수 경험 없음",
  "초등학교 선수",
  "중학교 선수",
  "고등학교 선수",
  "대학교 선수",
  "프로 선수",
];

interface PropsType {
  profile: PlayerProfile;
  setProfile: React.Dispatch<React.SetStateAction<PlayerProfile>>;
}

const SetCareer: React.FC<PropsType> = ({ profile, setProfile }) => {
  const selectItems = (item: string) => {
    setProfile((prev) => ({
      ...prev,
      career: item,
    }));
  };

  return (
    <InputLayout title="주요 풋살 포지션은 뭔가요?">
      <div className="flex flex-wrap gap-2">
        {OPTIONAL_ITEMS.map((item) => (
          <button
            className={`rounded-xl shadow-sm border py-2.5 px-3 font-medium text-sm ${
              profile.career === item
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

export default SetCareer;

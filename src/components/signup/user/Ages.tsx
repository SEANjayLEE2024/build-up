import { UserProfile } from "../../../models/signup.model";
import InputLayout from "../../common/InputLayout";

interface PropsType {
  userInfo: UserProfile;
  setUserInfo: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const AGES = [
  { label: "10대", className: "border-l rounded-tl-xl" },
  { label: "20대", className: "" },
  { label: "30대", className: "rounded-tr-xl" },
  { label: "40대", className: "border-l-1" },
  { label: "50대", className: "border-b-1" },
  { label: "60대", className: "border-b-1 rounded-br-xl" },
  {
    label: "70대 이상",
    className: "border-l-1 border-b-1 rounded-bl-xl rounded-br-xl",
  },
];

const Ages: React.FC<PropsType> = ({ userInfo, setUserInfo }) => {
  const selectAge = (index: number) => {
    setUserInfo((prev) => ({
      ...prev,
      age: AGES[index].label,
    }));
  };

  return (
    <InputLayout title="연령대">
      <div className="grid grid-cols-3">
        {AGES.map((age, index) => (
          <button
            key={age.label}
            className={`age-select-button ${age.className} ${
              userInfo.age === age.label
                ? "bg-base-secondary-hover text-base-primary"
                : "text-base-secondary"
            }`}
            onClick={() => selectAge(index)}
          >
            {age.label}
          </button>
        ))}
      </div>
    </InputLayout>
  );
};

export default Ages;

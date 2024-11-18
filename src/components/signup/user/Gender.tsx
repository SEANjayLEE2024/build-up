import { UserProfile } from "../../../models/signup.model";
import InputLayout from "../../common/InputLayout";

interface PropsType {
  userInfo: UserProfile;
  setUserInfo: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const Gender: React.FC<PropsType> = ({ userInfo, setUserInfo }) => {
  const onSelectGender = (value: number) => {
    setUserInfo((prev) => ({ ...prev, gender: value }));
  };

  return (
    <InputLayout title="성별">
      <div className="shadow-base-light border border-action-normal rounded-xl flex justify-between items-center text-sm overflow-hidden">
        <button
          className={`w-1/2 font-medium py-3 border-r-[1px] border-action-normal ${
            userInfo.gender === 0
              ? "text-base-primary bg-base-secondary-hover"
              : "text-base-secondary"
          }`}
          onClick={() => onSelectGender(0)}
        >
          남성
        </button>
        <button
          className={`w-1/2 font-medium py-3 border-action-normal ${
            userInfo.gender === 1
              ? "text-base-primary bg-base-secondary-hover"
              : "text-base-secondary"
          }`}
          onClick={() => onSelectGender(1)}
        >
          여성
        </button>
      </div>
    </InputLayout>
  );
};

export default Gender;

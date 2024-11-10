import { UserProfile } from "../../../models/signup.model";

interface PropsType {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const Gender: React.FC<PropsType> = ({ profile, setProfile }) => {
  const onSelectGender = (value: number) => {
    setProfile((prev) => ({ ...prev, gender: value }));
  };

  return (
    <section className="mb-4">
      <p className="text-sm font-medium mb-2 py-0.5">
        성별 <span className="text-red-600">*</span>
      </p>
      <div className="`base-light border border-action-normal rounded-xl flex justify-between items-center text-sm overflow-hidden">
        <button
          className={`w-1/2 font-medium py-3 border-r-[1px] border-action-normal ${
            profile.gender === 0
              ? "text-base-primary bg-base-secondary-hover"
              : "text-base-secondary"
          }`}
          onClick={() => onSelectGender(0)}
        >
          남성
        </button>
        <button
          className={`w-1/2 font-medium py-3 border-action-normal ${
            profile.gender === 1
              ? "text-base-primary bg-base-secondary-hover"
              : "text-base-secondary"
          }`}
          onClick={() => onSelectGender(1)}
        >
          여성
        </button>
      </div>
    </section>
  );
};

export default Gender;

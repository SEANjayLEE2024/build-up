import { UserProfile } from "../../../models/signup.model";

interface PropsType {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const ages = [
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

const Ages: React.FC<PropsType> = ({ profile, setProfile }) => {
  const selectAge = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      age: ages[index].label,
    }));
  };

  return (
    <section className="mb-4">
      <p className="text-sm font-medium mb-2 py-0.5">
        연령대 <span className="text-red-600">*</span>
      </p>

      <div className="grid grid-cols-3">
        {ages.map((age, index) => (
          <button
            key={age.label}
            className={`age-select-button ${age.className} ${
              profile.age === age.label
                ? "bg-base-secondary-hover text-base-primary"
                : "text-base-secondary"
            }`}
            onClick={() => selectAge(index)}
          >
            {age.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Ages;

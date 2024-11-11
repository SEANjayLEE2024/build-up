import { useState } from "react";
import { UserProfile } from "../../../models/signup.model";
import { NationInfo } from "../../../models/signup.model";
import SelectNationModal from "./SelectNationModal";
import arrowImage from "../../../assets/images/arrow-down.png";

interface PropsType {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  nationList: NationInfo[];
}

const Nation: React.FC<PropsType> = ({ profile, setProfile, nationList }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="mb-4">
      <p className="text-sm font-medium mb-2 py-0.5">
        국가 <span className="text-red-600">*</span>
      </p>
      <div
        className="base-light border p-3 border-action-normal rounded-xl flex items-center text-sm overflow-hidden gap-1 relative"
        onClick={openModal}
      >
        <div className="w-5 h-5 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={profile.nation.flag}
            alt={profile.nation.name}
          />
        </div>
        <span className="mx-1 font-medium">{profile.nation.name}</span>
        <img
          className="absolute top-1/2 right-3 -translate-y-1/2"
          src={arrowImage}
          alt="arrow-down"
        />
      </div>

      {modalOpen && (
        <SelectNationModal
          closeModal={closeModal}
          profile={profile}
          setProfile={setProfile}
          nationList={nationList}
        />
      )}
    </section>
  );
};

export default Nation;

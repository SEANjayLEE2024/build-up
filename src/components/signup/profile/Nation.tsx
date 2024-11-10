import { useState } from "react";
import { UserProfile } from "../../../models/signup.model";
import SelectNationModal from "./SelectNationModal";

interface PropsType {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const Nation: React.FC<PropsType> = ({ profile, setProfile }) => {
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
        className="`base-light border p-3 border-action-normal rounded-xl flex justify-between items-center text-sm overflow-hidden"
        onClick={openModal}
      >
        {profile.nation}
      </div>

      {modalOpen && <SelectNationModal closeModal={closeModal} />}
    </section>
  );
};

export default Nation;

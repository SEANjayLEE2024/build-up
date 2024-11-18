import { useState } from "react";
import { UserProfile } from "../../../models/signup.model";
import { NationInfo } from "../../../models/signup.model";
import SelectNationModal from "./SelectNationModal";
import arrowImage from "../../../assets/images/arrow-down.png";
import InputLayout from "../../common/InputLayout";

interface PropsType {
  userInfo: UserProfile;
  setUserInfo: React.Dispatch<React.SetStateAction<UserProfile>>;
  nationList: NationInfo[];
}

const Nation: React.FC<PropsType> = ({ userInfo, setUserInfo, nationList }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <InputLayout title="국가">
      <div
        className="shadow-base-light border p-3 border-action-normal rounded-xl flex items-center text-sm overflow-hidden gap-1 relative"
        onClick={openModal}
      >
        <div className="w-5 h-5 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={userInfo.nation.flag}
            alt={userInfo.nation.name}
          />
        </div>
        <span className="mx-1 font-medium">{userInfo.nation.name}</span>
        <img
          className="absolute top-1/2 right-3 -translate-y-1/2"
          src={arrowImage}
          alt="arrow-down"
        />
      </div>

      {modalOpen && (
        <SelectNationModal
          closeModal={closeModal}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          nationList={nationList}
        />
      )}
    </InputLayout>
  );
};

export default Nation;
